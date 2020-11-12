import React from "react";
import PokeCard from "./PokeCard";

class PokeList extends React.Component {
  render() {
    console.log(this.props.data);
    const card = this.props.data.map((item) => {
      return (
        <li key={item.id} className="container__list">
          <PokeCard url={item.url} name={item.name} type={item.types} />
        </li>
      );
    });
    return <ul>{card}</ul>;
  }
}

export default PokeList;
