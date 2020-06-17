import React from 'react';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar />
      </header>
      <div className="main">
        <h1> This is the main body area</h1>
        {/* Main Body compoenents go here */}
      </div>
    </div>
  );
}

export default App;
