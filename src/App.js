import React from 'react';
import './App.css';
import { PokemonContext } from './PokemonContext';
import PokemonSearch from './PokemonSearch';
import NavBar from './NavBar';

//declare variables for fetch process
let typesObj = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: {
        name: ''
      },
      groceryList: [{ name: '' }, { name: '' }, { name: '' }],
      render: ''
    };
  }

  static contextType = PokemonContext;

  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case 'ViewAll':
        return <ViewAll />;
      case 'MyCollection':
        return <MyCollection />;
      case 'GroceryList':
        return <GroceryList />;
      case 'Search':
        return <Search />;
      default:
        return null;
    }
  }
  handleChange(event) {
    this.setState({
      currentPokemon: {
        name: event.target.value
      }
    });
  }

  handleSearch(event) {
    console.log('currentPokemon: ', this.state.currentPokemon.name);
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.currentPokemon.name)
      .then((response) => response.json()) // turn the response into json
      .then((json) => {
        let outputString = json.name + ': ';
        let pokeType = json.types;
        pokeType.forEach((typeItem) => {
          //push the type to the array where the key is the name of the pokemon
          typesObj[json.name].push(typeItem.type.name);
        });
        //console.log pokemon name : type, type, etc..
        outputString += typesObj[json.name].join(', ');
        console.log(outputString);
      });

    // this.setState({
    //   currentPokemon: { name: event.target.value }
    // })
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <PokemonContext.Provider
          value={{
            state: this.state,
            handleChange: this.handleChange.bind(this),
            handleSearch: this.handleSearch.bind(this)
          }}
        >
          <header className="">
            <NavBar handleClick={this.handleClick.bind(this)} />
          </header>
          <div className="main">
            <h1> This is the main body area</h1>
            {/* Main Body compoenents go here */}
            {this._renderSubComp()}
          </div>
        </PokemonContext.Provider>
      </div>
    );
  }
}

class ViewAll extends React.Component {
  render() {
    return <div>ViewALL Component Would be displayed here</div>;
  }
}
class MyCollection extends React.Component {
  render() {
    return <div>MyCollection Component Would be displayed here</div>;
  }
}
class Search extends React.Component {
  render() {
    return <PokemonSearch />;
  }
}

class GroceryList extends React.Component {
  render() {
    return <div>Grocery List Component Would Be Displayed</div>;
  }
}

export default App;
