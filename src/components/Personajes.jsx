export const Personajes = ({ dB }) => {
  return (
    <main>
      <ul className="personajes">
        {dB?.results?.length > 0 ? (
          dB?.results?.map((data) => (
            <li className="personaje" key={data.id}>
              <h3>{data.name}</h3>
              <img src={data.image} alt={data.name} />
            </li>
          ))
        ) : (
          <p>Sin Resultados</p>
        )}
      </ul>
    </main>
  );
};
