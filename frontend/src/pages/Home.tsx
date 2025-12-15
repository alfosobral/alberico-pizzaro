import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonImg
} from "@ionic/react";
import { useEffect, useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;        // si en tu JSON viene como string, poné: price: number | string
  imageUrl?: string;
};

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

export default function Home() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const url = new URL("/api/products", BASE_URL);
      if (query.trim()) url.searchParams.set("q", query.trim());

      const res = await fetch(url.toString());
      const data = await res.json();

      // backend devuelve Page<Product>
      const items: Product[] = data.content ?? [];

      console.log("API items:", items); // <-- mirá si acá aparece tu producto
      setProducts(items);
    })();
  }, [query]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(p =>
      `${p.name} ${p.description}`.toLowerCase().includes(q)
    );
  }, [products, query]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            value={query}
            debounce={250}
            placeholder="Buscar en el menú..."
            onIonInput={(e) => setQuery(String(e.detail.value ?? ""))}
          />
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {shown.map((p) => (
              <IonCol key={p.id} size="12" sizeMd="6" sizeLg="4">
                <IonCard routerLink={`/product/${p.id}`} button>
                  {p.imageUrl && <IonImg src={p.imageUrl} alt={p.name} />}
                  <IonCardHeader>
                    <IonCardTitle>{p.name}</IonCardTitle>
                    <IonCardSubtitle>${p.price}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>{p.description}</IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
