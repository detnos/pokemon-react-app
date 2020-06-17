import React from 'react';
import PokemonSearch from './PokemonSearch';

function NavBar(props) {
  return (
    <nav className="App-nav">
      <h3> Pokemon React App</h3>
      <p>Built with Poke.api</p>
      <button onClick={props.handleClick.bind(this, 'ViewAll')}>
        View All
      </button>
      <button onClick={props.handleClick.bind(this, 'MyCollection')}>
        My Collection
      </button>
      <button onClick={props.handleClick.bind(this, 'GroceryList')}>
        Grocery List
      </button>
      {/* <button onClick={props.handleClick.bind(this, 'Search')}>Search</button> */}
      <PokemonSearch />
    </nav>
  );
}

export default NavBar;
