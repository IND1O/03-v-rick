import "./App.css";
import debounce from "just-debounce-it";
import { useDb } from "./hook/useDb";
import { Spinner } from "./components/Spinner";
import { useSearch } from "./hook/useSearch";
import { Personajes } from "./components/Personajes";
import { useCallback } from "react";
import { BarraBusqueda } from "./components/BarraBusqueda";

function App() {
  const { buscar, setBuscar, error } = useSearch();
  const { cargando, dB, getCharaters } = useDb({ buscar });

  const debounceGetCharacter = useCallback(
    debounce((buscar) => {
      //console.log("buscar", buscar);
      getCharaters({ buscar });
    }, 500),
    [getCharaters]
  );

  return (
    <div className="page">
      <BarraBusqueda
        buscar={buscar}
        setBuscar={setBuscar}
        getCharaters={getCharaters}
        debounceGetCharacter={debounceGetCharacter}
      />
      {error && (
        <p>
          <strong style={{ color: "red" }}>{error}</strong>
        </p>
      )}
      {cargando ? <Spinner /> : <Personajes dB={dB} />}
    </div>
  );
}

export default App;
