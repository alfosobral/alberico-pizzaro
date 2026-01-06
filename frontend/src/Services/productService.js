import { Navigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export async function searchProducts({
  query,
  tags = [],
  page,
  size
} = {}) {

  const params = new URLSearchParams();

  if (query && query.trim() !== "") {
    params.append("q", query);
  }

  if (tags.length > 0) {
    tags.forEach(tag => params.append("tags", tag));
  }

  if (page !== undefined) params.append("page", page);
  if (size !== undefined) params.append("size", size);

  const url = params.toString()
    ? `${API}/api/products?${params.toString()}`
    : `${API}/api/products`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error buscando productos");
  }

  return res.json();
}


export const searchProductById = async (id) => {
    try {
        const response = await fetch(`${API}/api/products/${id}`);
        if (!response.ok) {
            throw new Error('No se pudo encontrar el producto');
        }
        return await response.json();
    } catch (error) {
        console.error("Error en productService:", error);
        throw error;
    }
};