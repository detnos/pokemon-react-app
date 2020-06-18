import React from 'react';
import { PokemonContext } from './PokemonContext';

class Pokemon extends React.Component {
  static contextType = PokemonContext;



  render() {
    let currPokemon = this.context.state.currentPokemon;
    // let typePress = (event) => {
    //     console.log(currPokemon.types[event.target.value].type.url)
    //     return currPokemon.types[event.target.value].type.url
    // }

    return (
        
        <div className="Pokemon-display">
            {console.log(currPokemon)}
            <h1>{this.context.state.currentPokemon.name}</h1>
        <div className="pokemon-image">
            <img src={currPokemon.sprites.front_default} alt="pokemon-sprite"/>
        </div>
        <div className="abilities">
                <p><strong>Abilities:</strong></p>
            <ul key="abilities">
                {currPokemon.abilities.map(ability => {
                    return (<li key={ability.ability.name}>{ability.ability.name}</li>)
                })}
            </ul>
        </div>
        <div className="types">
                <p><strong>Type(s):</strong></p>
            <ul key="types">
                {currPokemon.types.map((type, index) => {
                    return (<li key={type.type.name}>{type.type.name}<button type="button" onClick={this.context.handleSimilarType} value={index}>View Pokemon of similar type</button></li>)
                })}
            </ul>
        </div>
        <div className="Stats">
                <p><strong>Stats:</strong></p>
            <ul key="stats">
                {currPokemon.stats.map(stat => {
                    return (<li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>)
                })}
            </ul>
        </div>

      </div>
    );
  }
}

export default Pokemon;
