import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="App-nav">
        <h3> Pokemon React App</h3>
        <p>Built with Poke.api</p>
        <button>View All</button>
        <button>My Collection</button>
        <button>Grocery List</button>
        <button>Search</button>
      </nav>
    );
  }
}

export default NavBar;
