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
