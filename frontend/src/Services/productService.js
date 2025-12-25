const API = process.env.REACT_APP_API_URL;

export async function searchProducts( {query} = {}) {

    const params = new URLSearchParams();

    if (query && query.trim() !== "") {
        params.append("q", query);
    }

    const url = params.toString()
    ? `${API}/api/products?${params}`
    : `${API}/api/products`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Error buscando productos");
    }

    return res.json();
}