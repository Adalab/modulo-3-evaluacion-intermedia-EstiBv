import React from "react";
import "./App.scss";
import PokemonData from "../data/PokemonData.json";
import PokeList from "./PokeList";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: PokemonData,
    };
    console.log(this.state);
  }
  render() {
    return (
      <section className="container">
        <h1 className="container__title">Mi lista de Pokemons</h1>
        <div className="container__list">
          <PokeList data={this.state.pokemons}></PokeList>
        </div>
      </section>
    );
  }
}

App.propTypes = {
  PokemonData: PropTypes.object,
};

export default App;
