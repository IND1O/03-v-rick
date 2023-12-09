import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [buscar, setBuscar] = useState("");
  const [error, setError] = useState(null);

  const primeraBusqueda = useRef(true);

  useEffect(() => {
    if (primeraBusqueda.current) {
      primeraBusqueda.current = buscar === "";
      return;
    }

    if (buscar === "") {
      setError("No se puede buscar un personaje con la casilla vacía");
      return;
    }
    if (buscar.match(/^\d+$/)) {
      setError("No se puede buscar un personaje con un número");
      return;
    }
    if (buscar.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [buscar]);

  return { buscar, error, setBuscar };
}
