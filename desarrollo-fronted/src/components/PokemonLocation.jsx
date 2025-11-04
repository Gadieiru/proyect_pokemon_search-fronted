export const PokemonLocation = ({ location }) => {
    return (
        <>
          <h3>
          Ubicacion/es del Pokemon:
          </h3>
          <ul>
            {location.map((loc, index) => (
                <li key={index}><strong>{loc.location_name}</strong></li>
            ))}
          </ul>
        <p>Debes mantenerte atento, preparate, quizas puedas atraparlo</p>
        </>
    )
};
