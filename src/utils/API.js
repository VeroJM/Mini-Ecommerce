const API = "https://dummyjson.com";

export const obtenerProducts = async () => {
  const response = {
    data: null,
    error: null
  };

  try {
    const res = await fetch(`${API}/products`);

    if (!res.ok) {
      throw new Error("Error al obtener los productos");
    }

    const data = await res.json();

    response.data = data.products; 
  } catch (err) {
    response.error = err.message;
  }

  return response;
};