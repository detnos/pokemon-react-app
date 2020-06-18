import React, { Component } from 'react';
import { PokemonContext } from './PokemonContext';
import PokemonListFormatter from './PokemonListFormatter';

export default class ViewPokemon extends Component {
  constructor(props) {
    super(props);
    // this.state = { pokemon: {} };
    this.idsToGet = [];
  }

  static contextType = PokemonContext;

  viewAll() {
    //builds array of pokemon ids to get
    console.log('viewAll called with per page of', this.context.state.resultsPerPage);
    for (let i = 1; i < this.context.state.resultsPerPage; i++) {
      this.idsToGet.push(i);
    }
    console.log(this.idsToGet);
  }

  viewSimilarTypes() {
    //builds array of pokemon names based on type
    // fetch to get all pokemon of set type
  }

  fetchData() {
    // fetch('https://pokeapi.co/api/v2/pokemon/' +)
    //   .then((response) => response.json()) // turn the response into json
    //   .then((json) => {
    //     setState(json);
    //   });
  }

  runAppropriateMethod() {
    switch (this.context.state.view) {
      case 'all':
        this.viewAll();
        break;
      case 'similarTypes':
        this.viewSimilarTypes();
        break;
      default:
        this.viewAll();
    }
  }

  render() {
    // let offset = this.context.state.currentSearchPage * resultsPerPage;
    // let idsToGet = [];
    // for (let i = 1; i < resultsPerPage; i++) {
    //   idsToGet.push(i);
    // }
    this.runAppropriateMethod();
    return (
      <div>
        {this.idsToGet.map((pokemonID) => {
          return <PokemonListFormatter id={pokemonID} />;
        })}
      </div>
    );
  }
}
