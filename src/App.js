import React from 'react';
import './App.css';
import {PokemonContext} from './PokemonContext';
import PokemonSearch from './PokemonSearch'

//declare variables for fetch process
let typesObj = {};


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        currentPokemon: {
          name: ''
        },
        groceryList: [
          { name: '' },
          { name: '' },
          { name: '' }
        ]
      }
    }

  static contextType = PokemonContext;

  handleChange(event) {
    this.setState({
      currentSearch: {
        name: event.target.value
      }
    })
  }

  handleSearch(event) {

    console.log('currentSearch: ', this.state.currentSearch.name)
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.currentSearch.name)
      .then(response => response.json()) // turn the response into json
      .then(json => {
        this.setState({
          currentPokemon: json || {name: this.state.currentSearch.name}
        })
      });


    event.preventDefault()

  }

  render() {
    return (
      <div className="App">
        <PokemonContext.Provider value={{
          state: this.state,
          handleChange: this.handleChange.bind(this),
          handleSearch: this.handleSearch.bind(this)
        }}>
        <header className="App-header">
          <PokemonSearch />
          {/* Not sure if we need a header or not, or perhaps the nav goes in the header */}
        </header>
        <nav className="App-nav">{/* Nav Bar of Features to Click */}</nav>
        <body className="">{/* Main Body compoenents go here */}</body>
        </PokemonContext.Provider>
      </div>
    );
  }
}

export default App;
