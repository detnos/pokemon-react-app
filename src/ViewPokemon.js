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
    for (let i = 1; i < this.context.state.resultsPerPage; i++) {
      this.idsToGet.push(i);
    }
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

  // componentDidMount() {
  //   console.log('running componentDidMount');
  //   this.runAppropriateMethod();
  // }

  // componentDidUpdate() {
  //   console.log('running componentDidUpdate');
  //   this.runAppropriateMethod();
  // }

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
    // console.log(
    //   'rendering viewPokemon with state.view of',
    //   this.context.state.view
    // );
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
