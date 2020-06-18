import React, { Component } from 'react';

class PokemonListFormatter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(this.props.url)
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
              this.state.id +
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
