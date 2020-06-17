import React from 'react';

const value = { 
    currentPokemon: {},
    groceryList: {},
}

export const PokemonContext = React.createContext(value);
