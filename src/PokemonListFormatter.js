import React, { Component } from 'react';

class PokemonListFormatter extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.id)
      .then((response) => response.json()) // turn the response into json
      .then((json) => {
        this.setState(json);
      });
  }

  render() {
    return (
      <div className="listRow">
        <div className="pokemonSprite">
          <img
            alt="sprite"
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
              this.props.id +
              '.png'
            }
          />
        </div>
        <div className="pokemonListDetail">{this.state.name}</div>
      </div>
    );
  }
}

export default PokemonListFormatter;
