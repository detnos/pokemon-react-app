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

  handleSearch(event) {
    this.setState({
      currentPokemon: { name: event.target.value}
    })
    event.preventDefault()

    console.log('currentPokemon: ', this.context.currentPokemon.name)
    // fetch('https://pokeapi.co/api/v2/pokemon/' + event.tagert.value)
    //   .then(response => response.json()) // turn the response into json
    //   .then(json => {
    //     let outputString = json.name + ': '
    //     let pokeType = json.types;
    //     pokeType.forEach(typeItem => {
    //       //push the type to the array where the key is the name of the pokemon
    //       typesObj[json.name].push(typeItem.type.name)
    //     });
    //     //console.log pokemon name : type, type, etc..
    //     outputString += typesObj[json.name].join(', ');
    //     console.log(outputString);
    //   });


  }

  handleChange(event) {
    this.setState({
      currentPokemon: {
        name: event.target.value
      }
    })
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
