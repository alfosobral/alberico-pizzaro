export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
};

const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchProducts(q?: string): Promise<Product[]> {
  const url = new URL("/api/products", BASE_URL);
  if (q && q.trim()) url.searchParams.set("q", q.trim());

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Error ${res.status} al listar productos`);
  // si tu backend devuelve Page<Product>, cambiá por: const data = await res.json(); return data.content;
  return await res.json();
}

export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/api/products/${encodeURIComponent(id)}`);
  if (!res.ok) throw new Error(`Producto no encontrado (${res.status})`);
  return await res.json();
}
