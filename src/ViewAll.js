import React, { Component } from 'react';
import { PokemonContext } from './PokemonContext';
import PokemonListFormatter from './PokemonListFormatter';

export default class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: {} };
  }

  static contextType = PokemonContext;

  render() {
    const resultsPerPage = 4;
    // let offset = this.context.state.currentSearchPage * resultsPerPage;
    let idsToGet = [];
    for (let i = 1; i < resultsPerPage; i++) {
      idsToGet.push(i);
    }
    return (
      <div>
        {idsToGet.map((pokemonID) => {
          return <PokemonListFormatter id={pokemonID} />;
        })}
      </div>
    );
  }
}
