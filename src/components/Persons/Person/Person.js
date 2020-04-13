import React from "react";
import "./Person.css";
//import Radium, { StyleRoot } from "radium";
//import styled from "styled-components";

const person = (props) => {
  // const StyleDiv = styled.div`
  //    {
  //     width: 60%;
  //     margin: 16px;
  //     border: 1px solid #eee;
  //     box-shadow: 0 2px 3px #ccc;
  //     padding: 16px;
  //     text-align: center;
  //      @media (min-width: 500px){ .Person { width: 450px; }},
  //   }
  // `;
  return (
    <div className="Person">
      <p onClick={props.clicked}>
        I am {props.name} , {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;
