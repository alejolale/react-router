import React from "react";
import "./App.css";
import List from "./components/List";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: []
    };
  }

  //let idPokemon = 0;
  async componentDidMount() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10"
    );
    const data = await response.json();
    this.setState({ pokeList: data.results });

    console.log(this.state.pokeList);
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.pokeList.map((pokemon, index) => (
            <List key={index} poke={pokemon} />
          ))}
          
        </div>
      </Router>
    );
  }
}

export default App;
