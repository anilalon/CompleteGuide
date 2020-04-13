//import React, { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import { render } from "react-dom";
//import Radium, { StyleRoot } from "radium";
import styled from "styled-components";

class App extends Component {
  state = {
    persons: [
      { id: "sad", name: "anil", age: 24 },
      { id: "sd", name: "gal", age: 24 },
      { id: "Sda", name: "noa", age: 24 },
    ],
    showPersons: false,
    otherState: "other value",
  };

  switchNameHandler = (name) => {
    // style.border = "1px solid red";
    this.setState({
      persons: [
        { name: "anil", age: 25 },
        { name: name, age: 25 },
        { name: "noa", age: 25 },
      ],
      showPersons: !this.state.showPersons,
      otherState: this.state.otherState,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroungColor: "red",
      font: "inherit",
      border: "1px solid green",
      padding: "8px",
      cursor: "pointer",
    };
    // return (

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          ></Persons>
        </div>
      );
    }
    return <div className="App">{persons}</div>;
  }
}

export default App;
