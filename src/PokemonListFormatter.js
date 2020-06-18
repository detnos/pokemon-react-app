import React, { useEffect, useState } from 'react';

function PokemonListFormatter(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + props.id)
      .then((response) => response.json()) // turn the response into json
      .then((json) => {
        setState(json);
      });
  });

  return (
    <div className="listRow">
      <div className="pokemonSprite">
        <img
          alt="sprite"
          src={
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
            props.id +
            '.png'
          }
        />
      </div>
      <div className="pokemonListDetail">{state.name}</div>
    </div>
  );
}

export default PokemonListFormatter;
