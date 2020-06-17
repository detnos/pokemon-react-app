import React, { Component } from 'react';

export default class PokemonListFormatter extends Component {
  render(props) {
    return (
      <div className="listRow">
        <div className="pokemonSprite">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{props.id}" />
        </div>
        <div className="pokemonListDetail">{props.name}</div>
      </div>
    );
  }
}
