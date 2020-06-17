import React from 'react';
import { PokemonContext } from './PokemonContext';

class Pokemon extends React.Component {
  static contextType = PokemonContext;

  render() {
    let currPokemon = this.context.state.currentPokemon;

    return (
        
        <div className="Pokemon-display">
            {console.log(currPokemon)}
            <h1>{this.context.state.currentPokemon.name}</h1>
        <div className="pokemon-image">
            <img src={currPokemon.sprites.front_default} alt="pokemon-sprite"/>
        </div>
        <div className="abilities">
                <p><strong>Abilities:</strong></p>
            <ul>
                {currPokemon.abilities.map(ability => {
                    return (<li>{ability.ability.name}</li>)
                })}
            </ul>
        </div>
        <div className="types">
                <p><strong>Type(s):</strong></p>
            <ul>
                {currPokemon.types.map(type => {
                    return (<li>{type.type.name}</li>)
                })}
            </ul>
        </div>
        <div className="Stats">
                <p><strong>Stats:</strong></p>
            <ul>
                {currPokemon.stats.map(stat => {
                    return (<li>{stat.stat.name}: {stat.base_stat}</li>)
                })}
            </ul>
        </div>

      </div>
    );
  }
}

export default Pokemon;
