import React from 'react';
import Button from './Button';
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

    // this.fireFilter = this.fireFilter.bind(this);
    // this.psychicFilter = this.psychicFilter.bind(this);

    // this.selectAll = this.selectAll.bind(this);
    // this.selectFire = this.selectFire.bind(this);
    // this.selectPsychic = this.selectPsychic.bind(this);

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
          <Button classes="base-btn filter-button" click={this.filterType}>Fire</Button>
          <Button classes="base-btn filter-button" click={this.filterType}>Psychic</Button>
        </div>
        <div className="pokedex">
          <Pokemon pokemon={this.state.selectedFilter[this.state.pokeIndex]} />
        </div>
        <div className="nav-buttons">
          <Button classes="base-btn nav-button" click={this.previousPokemon}>Anterior</Button>
          <Button classes="base-btn nav-button" click={this.nextPokemon}>Próximo</Button>
        </div>
        <div>
          <Button classes="base-all-btn filter-button" click={this.filterType}>All</Button>
        </div>
      </>
    );
  }
}

export default Pokedex;