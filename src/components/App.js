import React from "react";
import "./App.scss";
import PokemonData from "../data/PokemonData.json";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: PokemonData,
    };
  }
  render() {
    return (
      <div>
        <PokeList data={this.state.data} />
      </div>
    );
  }
}

export default App;
