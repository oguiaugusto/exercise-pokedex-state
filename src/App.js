import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import './Main.css';
import './Buttons.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedFilter: this.allPokemons(),
    }

    this.allPokemons = this.allPokemons.bind(this);
    this.fireFilter = this.fireFilter.bind(this);
    this.psychicFilter = this.psychicFilter.bind(this);

    this.selectFire = this.selectFire.bind(this);
    this.selectPsychic = this.selectPsychic.bind(this);
  }

  allPokemons() {
    return pokemons;
  }
  fireFilter() {
    const firePokemons = pokemons.filter((pokemon) => pokemon.type === 'Fire');
    return firePokemons;
  }
  psychicFilter() {
    const psychicPokemons = pokemons.filter((pokemon) => pokemon.type === 'Psychic');
    return psychicPokemons;
  }

  selectFire() {
    this.setState({
      selectedFilter: this.fireFilter(),
    });
  }
  selectPsychic() {
    this.setState({
      selectedFilter: this.psychicFilter(),
    });
  }

  render() { 
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <div className="select-type">
          <button className="base-btn filter-button" onClick={this.selectFire}>Fire</button>
          <button className="base-btn filter-button" onClick={this.selectPsychic}>Psychic</button>
        </div>
        <Pokedex pokemons={this.state.selectedFilter} />
      </div>
    );
  }
}

export default App;