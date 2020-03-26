import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import { render } from "react-dom";

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "anil", age: 24 },
      { name: "gal", age: 24 },
      { name: "noa", age: 24 }
    ],
    otherState: "other value"
  });

  const switchNameHandler = name => {
    setPersonState({
      persons: [
        { name: "anil", age: 25 },
        { name: name, age: 25 },
        { name: "noa", age: 25 }
      ],
      otherState: personState.otherState
    });
  };

  const nameChangedHandler = event => {
    setPersonState({
      persons: [
        { name: "anil", age: 25 },
        { name: event.target.value, age: 24 },
        { name: "noa", age: 25 }
      ],
      otherState: personState.otherState
    });
  };

  const style = {
    backGroungColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <h1>Hi I'm react app</h1>
      <p>This is working</p>
      <button
        style={style}
        onClick={switchNameHandler.bind(personState, "Gal")}
      >
        switch
      </button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      >
        My hobbies are:
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        click={() => switchNameHandler("Gal!")}
        changed={nameChangedHandler}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default App;
