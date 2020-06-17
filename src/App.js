import React from 'react';
import './App.css';
import NavBar from './NavBar';

// function App() {
//   return (
//     <div className="App">
//       <header className=""> 
//         <NavBar />
//       </header>
//       <div className="main">
//         <h1> This is the main body area</h1>
//         {/* Main Body compoenents go here */}
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = { render: 'Choker' };
  }
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
  render() {
    return (
      <div className="App">
        <header className="">
          <NavBar handleClick={this.handleClick.bind(this)} />
        </header>
        <div className="main">
          <h1> This is the main body area</h1>
          {/* Main Body compoenents go here */}
          {this._renderSubComp()}
        </div>
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
    return <div>Search Component Would Be Displayed</div>;
  }
}

class GroceryList extends React.Component {
  render() {
    return <div>Grocery List Component Would Be Displayed</div>;
  }
}

export default App;
