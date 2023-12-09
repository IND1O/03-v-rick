export const BarraBusqueda = ({
  buscar,
  setBuscar,
  getCharaters,
  debounceGetCharacter,
}) => {
  const handleChange = (e) => {
    const nuevaBusqueda = e.target.value;
    setBuscar(nuevaBusqueda);
    debounceGetCharacter(nuevaBusqueda);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCharaters();
  };

  return (
    <header>
      <h3>Rick & Morty</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Buscar"
          name="query"
          value={buscar}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </header>
  );
};
