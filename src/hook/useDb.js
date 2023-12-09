import { useRef, useState } from "react";
import { getById } from "../services/apiRequest";

export function useDb({ buscar }) {
  const [dB, setDb] = useState([]);
  const [cargando, setCargando] = useState(false);
  const busquedaPrevia = useRef(buscar);

  const getCharaters = async () => {
    if (buscar === busquedaPrevia.current) return;

    try {
      busquedaPrevia.current = buscar;

      setCargando(true);
      const response = await getById({ buscar });
      setDb(response);
    } catch (e) {
      throw new Error("Error en la base de datos");
    } finally {
      setCargando(false);
    }
  };

  return { dB, cargando, getCharaters };
}
