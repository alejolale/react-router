import React from "react";
import "./App.css";
import List from "./components/List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Onedescription from "./components/OneDescription";
import BasicInformation from "./components/BasicInformation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: [],
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
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              {this.state.pokeList.map((pokemon, index) => (
                <List {...pokemon} key={index} />
              ))}
            </Route>
            <Route exact path="/pokemon/:id">
              <BasicInformation />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
