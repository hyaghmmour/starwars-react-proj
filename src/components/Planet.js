import React from "react";
import "../styles.css";
import Resident from "./Resident";

class Planet extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: props,
      residents: new Array()
    };
    //this.getSpecies = this.getSpecies.bind(this);
    this.insert = this.insert.bind(this);
    this.setSpecies = this.setSpecies.bind(this);
  }

  insert(string) {
    let str1 = string.substring(0, 4);
    let str2 = string.substring(4);
    return str1 + "s" + str2;
  }

  setSpecies(species) {}

  componentDidMount() {
    const arr = this.state.data.residents;
    for (let i = 0; i < arr.length; i++) {
      const url = this.insert(arr[i]);
      fetch(url)
        .then((response) => response.json())
        .then((data) =>
          this.setState((currentState) => {
            return {
              data: currentState.data,
              residents: [...currentState.residents, data]
            };
          })
        );
    }
  }

  render() {
    let iteration = 0;
    let residentComponents = this.state.residents.map((item) => {
      //this.getSpecies(item.species[0]);
      iteration++;
      return (
        <Resident
          name={item.name}
          specLink={item.species}
          birthyear={item.birth_year}
          films={item.films.length}
          key={iteration}
        />
      );
    });
    return (
      <div className="planet-container">
        <h2>{this.state.data.name}</h2>
        <p>Population: {this.state.data.population}</p>
        <h5>Residents:</h5>
        {residentComponents}
        {/* <Resident name="R2-D2" species="Droid" films="5" birthyear="2021" /> */}
      </div>
    );
  }
}

export default Planet;
