import React from "react";

import { Link } from "react-router-dom";

class BasicInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  func = () => {
    return console.log(this.props);
  };

  async componentDidMount() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/metapod");
    const data = await response.json();
    this.setState({ pokemon: data });
    console.log(data);
    this.func();
  }

  render() {
    return (
      <div className="basic">
            <p>Hello World yes !</p>

        <Link to="/">Back to List</Link>
      </div>
    );
  }
}

export default BasicInformation;
