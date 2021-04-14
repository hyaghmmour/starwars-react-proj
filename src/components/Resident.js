import React from "react";

class Resident extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: props,
      species: "n/a"
    };
    this.getSpecies = this.getSpecies.bind(this);
    this.insert = this.insert.bind(this);
  }

  //whats left for this class,
  /**
   * Use the getSpecies() funtion to find the species and display it to the screen
   * I included the species link within props as "link" for the usage
   * Remember that the url needs to be changed
   * Also, not all people will have a species
   */

  getSpecies(url) {
    if (url[0] !== undefined) {
      fetch(this.insert(url[0]))
        .then((response) => response.json())
        .then((data) =>
          this.setState((currentState) => {
            return {
              data: currentState.data,
              species: data.name
            };
          })
        );
    } else {
      console.log("null");
    }
    //console.log(changed)
  }

  insert(string) {
    let str1 = string.substring(0, 4);
    let str2 = string.substring(4);
    return str1 + "s" + str2;
  }

  render() {
    this.getSpecies(this.state.data.specLink);
    return (
      <div className="resident-container">
        <h5>{this.state.data.name}</h5>
        <div className="info-wrapper">
          <div className="small-info-container">
            <p className="category-title">Birthyear</p>
            <p className="category-text">{this.state.data.birthyear}</p>
          </div>
          <div className="small-info-container">
            <p className="category-title">Species</p>
            <p className="category-text">{this.state.species}</p>
          </div>
          <div className="small-info-container">
            <p className="category-title">Films</p>
            <p className="category-text">{this.state.data.films}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Resident;
