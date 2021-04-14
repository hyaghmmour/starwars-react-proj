import "./styles.css";
import Planet from "./components/Planet";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: new Array()
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => data.results)
      .then((planets) => this.setState({ planets: planets }));
  }

  render() {
    console.log(this.state.map === undefined);
    let iterator = 0;
    let planetComponents = this.state.planets.map((item) => {
      iterator += 1;
      return (
        <Planet
          name={item.name}
          population={item.population}
          residents={item.residents}
          key={iterator}
        />
      );
    });
    return <div>{planetComponents}</div>;
  }
}

export default App;
