import React from "react";

class PokeCard extends React.Component {
  render() {
    console.log(this.props.type);
    const listTypes = this.props.type.map((item, i) => {
      return <li key={i}> {item}</li>;
    });
    return (
      <div>
        <img
          src={this.props.url}
          className="pokemon-img"
          alt={this.props.name}
        />
        <h2> {this.props.name}</h2>
        <ul> {listTypes} </ul>
      </div>
    );
  }
}

export default PokeCard;
