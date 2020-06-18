import React, { Component } from 'react';
import { PokemonContext } from './PokemonContext';
import PokemonListFormatter from './PokemonListFormatter';

export default class ViewPokemon extends Component {
  constructor(props) {
    super(props);
    // this.state = { pokemon: {} };
    this.data = [];
  }

  static contextType = PokemonContext;

  viewAll() {
    //builds array of pokemon ids to get
    let offset =
      this.context.state.currentPage * this.context.state.resultsPerPage + 1;
    for (let i = offset; i < offset + this.context.state.resultsPerPage; i++) {
      let pokeData = {};
      pokeData.url = 'https://pokeapi.co/api/v2/pokemon/' + i;
      this.data.push(pokeData);
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
    this.idsToGet = [];
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
        <div>
          <button
            onClick={() =>
              this.setState({
                currentPage: this.context.state.currentPage - 1
              })
            }
          >
            Previous
          </button>
          <button
            onClick={() =>
              this.setState({
                currentPage: this.context.state.currentPage + 1
              })
            }
          >
            Next
          </button>
        </div>
        {this.data.map((poke) => {
          return <PokemonListFormatter url={poke.url} />;
        })}
      </div>
    );
  }
}
