import React from "react";
import "./App.scss";
import PokemonData from "../data/PokemonData.json";
import PokeList from "./PokeList";

class App extends React.Component {
  render() {
    console.log(PokemonData);
    return (
      <div className="container">
        <PokeList data={PokemonData}></PokeList>
      </div>
    );
  }
}

export default App;
