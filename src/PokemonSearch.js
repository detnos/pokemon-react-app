import React from 'react';
import { PokemonContext } from './PokemonContext';

class PokemonSearch extends React.Component {
  static contextType = PokemonContext;
  render() {
    return (
      <div className="Search">
        <form onSubmit={this.context.handleSearch}>
          <label>
            Find a Pokemon:
            <input
              type="text"
              name="name"
              onChange={this.context.handleChange}
            />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default PokemonSearch;
