import React from "react";

const cockpit = (props) => {
  classes = [];
  if (props.persons.length <= 2) {
    classes.push(classes.red);
  }
  if (props.persons.length <= 1) {
    classes.push(classes.bold);
  }

  return (
    <div>
      <h1>Hi I'm react app</h1>
      <p>This is working</p>
      <button
        style={style}
        onClick={this.switchNameHandler.bind(this.state, "Gal")}
      >
        switch
      </button>
    </div>
  );
};
export default cockpit;
