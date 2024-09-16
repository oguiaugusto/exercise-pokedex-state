import React from 'react';
import Pokedex from './Pokedex';
import './Main.css';
import './Buttons.css';

class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;