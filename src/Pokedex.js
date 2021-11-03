import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokeIndex: 0,
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.previousPokemon = this.previousPokemon.bind(this);
  }
  
  
  nextPokemon() {
    const { pokemons } = this.props;
    const { pokeIndex } = this.state;
    if (pokeIndex !== pokemons.length - 1) {
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
    const { pokemons } = this.props;
    const { pokeIndex } = this.state;
    if (pokeIndex !== 0) {
      this.setState((currentPokeIndex, _props) => ({
        pokeIndex: currentPokeIndex.pokeIndex - 1,
      }));
    } else {
      this.setState({
        pokeIndex: pokemons.length - 1,
      });
    }
  }

  render() {
    return (
      <>
        <div className="pokedex">
          <Pokemon pokemon={this.props.pokemons[this.state.pokeIndex]} />
        </div>
        <div className="buttons">
          <button className="nav-button" onClick={this.previousPokemon}>Anterior</button>
          <button className="nav-button" onClick={this.nextPokemon}>Próximo</button>
        </div>
      </>
    );
  }
}

export default Pokedex;