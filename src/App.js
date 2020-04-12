import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import { render } from "react-dom";
//import Radium, { StyleRoot } from "radium";
import styled from "styled-components";

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      // { name: "anil", age: 24 },
      // { name: "gal", age: 24 },
      // { name: "noa", age: 24 },
    ],

    otherState: "other value",
  });

  const style = {
    backgroungColor: "red",
    font: "inherit",
    border: "1px solid green",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroungColor: "salmon",
      border: "1px solid salmon",

      color: "red",
    },
  };

  const switchNameHandler = (name) => {
    // style.border = "1px solid red";
    setPersonState({
      persons: [
        { name: "anil", age: 25 },
        { name: name, age: 25 },
        { name: "noa", age: 25 },
      ],
      showPersons: true,
      otherState: personState.otherState,
    });
  };

  const nameChangedHandler = (event) => {
    console.log(personState.showPersons);

    if (personState.showPersons) {
      setPersonState({
        persons: [
          { name: "anil", age: 25 },
          { name: event.target.value, age: 24 },
          { name: "noa", age: 25 },
        ],
        showPersons: !personState.showPersons,
        otherState: personState.otherState,
      });
    } else {
      setPersonState({
        persons: [],
        showPersons: !personState.showPersons,
        otherState: personState.otherState,
      });
    }
  };

  const classes = [];
  if (personState.persons.length <= 2) {
    classes.push("red");
  }
  if (personState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    //  <StyleRoot>
    <div className="App">
      <h1>Hi I'm react app</h1>
      <p className={classes.join(" ")}>This is working</p>
      <button
        style={style}
        onClick={switchNameHandler.bind(personState, "Gal")}
      >
        switch
      </button>
      {personState.persons.map((p) => {
        return <Person name={p.name} age={p.age}></Person>;
      })}
    </div>
    //  </StyleRoot>
  );
};

export default App;
