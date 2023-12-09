import { clienteFetch } from "../config/urlConfig";

export const getById = async ({ buscar }) => {
  if (buscar === "") return null;
  try {
    const response = await fetch(`${clienteFetch}/character/?name=${buscar}`);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Error en la petición a la base de datos");
  }
};
