import React, { Component } from 'react';
import { PokemonContext } from './PokemonContext';
import PokemonListFormatter from './PokemonListFormatter';

export default class ViewAll extends Component {
  constructor(props) {
    super(props);
    const resultsPerPage = 50;
  }
  static contextType = PokemonContext;

  getPokemon(this.context.state.currentSearchPage) {
    let offset = this.context.state.currentSearchPage * resultsPerPage; //#TODO Fix upper limit of ID when offsetting.  #TODO Handle 10000 series IDs

    fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.currentSearch.name)
      .then((response) => response.json()) // turn the response into json
      .then((json) => {
        this.setState({
          currentPokemon: json || {
            name: this.state.currentSearch.name
          } //#REFACTOR: Use catch instead
        });
      });
  }

  render() {
    return <div></div>;
  }
}
