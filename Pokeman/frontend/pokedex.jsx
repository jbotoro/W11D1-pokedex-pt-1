import React from "react";
import ReactDOM from "react-dom";
import { receiveAllPokemon} from "./actions/pokemon_actions";
import { fetchAllPokemon } from "./util/api_util";
import {configureStore} from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Wow such react!</h1>, rootEl)
})