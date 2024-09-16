import React from 'react';

class Buttons extends React.Component {
  render() {
    const { classes, click, pokemons } = this.props;

    const types = [];

    const rawTypes = pokemons.map((pokemon) => pokemon.type);
    rawTypes.forEach((type) => {
      if (!types.includes(type)) types.push(type);
    })
    
    types.unshift('All');

    return (
      <>
        {types.map((type) => <button key={type} className={classes} onClick={click}>{type}</button>)}
      </>
    );
  }
}
 
export default Buttons;