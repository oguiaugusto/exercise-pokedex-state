import React from 'react';
import Buttons from './Buttons';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokeIndex: 0,
      selectedFilter: pokemons,
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.previousPokemon = this.previousPokemon.bind(this);
    this.filterType = this.filterType.bind(this);
  }
  
  nextPokemon() {
    const { pokeIndex, selectedFilter } = this.state;
    if (pokeIndex !== selectedFilter.length - 1) {
      this.setState((currentPokeIndex, _props) => ({
        pokeIndex: currentPokeIndex.pokeIndex + 1,
      }));
    } else {
      this.setState({
        pokeIndex: 0,
      });
    }
  }
  previousPokemon() {
    const { pokeIndex, selectedFilter } = this.state;
    if (pokeIndex !== 0) {
      this.setState((currentPokeIndex, _props) => ({
        pokeIndex: currentPokeIndex.pokeIndex - 1,
      }));
    } else {
      this.setState({
        pokeIndex: selectedFilter.length - 1,
      });
    }
  }

  filterType(e) {
    const type = e.target.innerText;
    
    if (type !== 'All') {
      const filter = pokemons.filter((pokemon) => pokemon.type === type);
      this.setState({
        pokeIndex: 0,
        selectedFilter: filter,
      });
    } else {
      this.setState({
        pokeIndex: 0,
        selectedFilter: pokemons,
      });
    }
  }

  render() {
    return (
      <>
        <div className="select-type">
          <Buttons classes="base-btn filter-button" click={this.filterType} pokemons={pokemons} />
        </div>
        <div className="pokedex">
          <Pokemon pokemon={this.state.selectedFilter[this.state.pokeIndex]} />
        </div>
        <div className="nav-buttons">
          <button className="base-btn nav-button" onClick={this.previousPokemon} disabled={this.state.selectedFilter.length < 2}>Anterior</button>
          <button className="base-btn nav-button" onClick={this.nextPokemon} disabled={this.state.selectedFilter.length < 2}>Próximo</button>
        </div>
      </>
    );
  }
}

export default Pokedex;