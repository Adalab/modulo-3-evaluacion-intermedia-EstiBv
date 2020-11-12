import React from "react";
import "./App.scss";
import PokemonData from "../data/PokemonData.json";
import PokeList from "./PokeList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="container__title">Mi lista de Pokemon</h1>
        <PokeList data={PokemonData}></PokeList>
      </div>
    );
  }
}

export default App;
