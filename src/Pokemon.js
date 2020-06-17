import React from 'react';
import { PokemonContext } from './PokemonContext';

class Pokemon extends React.Component {
  static contextType = PokemonContext;

  render() {
    {
      /*let url = this.context.currentPokemon.sprites.front_default*/
    }
    return (
      <div className="Pokemon-display">
        <p>Pokemon Component</p>
        <div className="pokemon-image"></div>
        <p>{this.context.state.currentPokemon.name}</p>
        {console.log(this.context.state.currentPokemon.sprites.front_default)}
      </div>
    );
  }
}

export default Pokemon;
