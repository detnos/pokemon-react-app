import React from 'react';

const value = { 
    currentPokemon: {name: 'Default'},
    groceryList: {},
}

export const PokemonContext = React.createContext(value);
