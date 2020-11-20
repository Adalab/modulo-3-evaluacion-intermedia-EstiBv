import React from "react";
import PropTypes from "prop-types";

class PokeCard extends React.Component {
  render() {
    const listTypes = this.props.type.map((item, i) => {
      return <li key={i}> {item}</li>;
    });
    return (
      <div className="container__card">
        <img
          src={this.props.url}
          className="pokemon-img"
          alt={this.props.name}
        />
        <h2 className="container__card--title"> {this.props.name}</h2>
        <ul className="container__card--type"> {listTypes} </ul>
      </div>
    );
  }
}

PokeCard.propTypes = {
  name: PropTypes.string.isRequired,
};
export default PokeCard;
