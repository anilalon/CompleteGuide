import React from "react";
import "./Person.css";
//import Radium, { StyleRoot } from "radium";
import styled from "styled-components";

const person = (props) => {
  const StyleDiv = styled.div`{
    width: 60%;
    margin: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    "@media (min-width: 500px)": { width: "450px" },
  };`;
  return (
    //  <StyleRoot>
    // <div className="Person">
    <StyleDiv>
      {" "}
      <p onClick={props.click}>
        {" "}
        I am {props.name} , {props.age}{" "}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
    //  </StyleRoot>
  );
};
export default person;
