import React from 'react';
import { PokemonContext } from './PokemonContext'

class Pokemon extends React.Component {
    static contextType = PokemonContext;
    render() {
        return (
            <div className="Pokemon-display">
                <p>Pokemon Component</p>
                <p>{this.context.state.currentPokemon.name}</p>
                {console.log(this.context.state.currentPokemon)}
            </div>
        );
    }
}

export default Pokemon;
