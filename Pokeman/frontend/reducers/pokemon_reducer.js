import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      let object = {};
      action.pokemon.forEach(pokemon => {
        object[pokemon.id] = pokemon;
      });
      return object;
    default:
      return state;
  }
};