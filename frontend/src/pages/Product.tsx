import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonImg,
  IonChip,
  IonLabel,
} from "@ionic/react";
import { useMemo } from "react";
import { useParams } from "react-router";
import { PRODUCTS } from "../data/products";

export default function Product() {
  const { id } = useParams<{ id: string }>();

  const product = useMemo(() => PRODUCTS.find((p) => p.id === id), [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>{product ? product.name : "Producto"}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {!product ? (
          <p>No se encontró el producto.</p>
        ) : (
          <>
            {product.image && <IonImg src={product.image} alt={product.name} />}

            <h2 style={{ marginTop: 16 }}>{product.name}</h2>
            <p style={{ fontSize: 18, margin: "8px 0" }}><b>${product.price}</b></p>
            <p>{product.description}</p>

            {(product.tags ?? []).length > 0 && (
              <div style={{ marginTop: 12 }}>
                {(product.tags ?? []).map((t) => (
                  <IonChip key={t}>
                    <IonLabel>{t}</IonLabel>
                  </IonChip>
                ))}
              </div>
            )}

            <hr style={{ margin: "16px 0" }} />

            <h3>Detalles</h3>
            <ul>
              <li>ID: {product.id}</li>
              <li>Precio: ${product.price}</li>
              <li>Categoría: {(product.tags ?? [])[0] ?? "—"}</li>
            </ul>
          </>
        )}
      </IonContent>
    </IonPage>
  );
}
