import React from "react";
import PokeCard from "./PokeCard";
import PropTypes from "prop-types";

class PokeList extends React.Component {
  render() {
    const pokeItems = this.props.data.map((pokemon) => {
      return (
        <li key={pokemon.id} className="container__list">
          <PokeCard
            url={pokemon.url}
            name={pokemon.name}
            type={pokemon.types}
          />
        </li>
      );
    });
    return <ul>{pokeItems}</ul>;
  }
}

PokeList.propTypes = {
  id: PropTypes.number,
  types: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default PokeList;
