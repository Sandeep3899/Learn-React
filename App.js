/*

<div id = 'parent>
    <div id = 'child'>
        <h1 id = 'heading'>Hello, this is my 1st React code</h1>
        <p>This is a paragraph inside the child div.</p> sibling
    </div>
    <div id = 'sibling'>
        <h1 id = 'heading'>Hello, this is my 1st React code</h1>
        <p>This is a paragraph inside the sibling div.</p>
    </div>
</div>

*/
//this is core React code, later we will use JSX to write this code

import React from "react"; //importing react
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading" }, "Hello, this is my 1st React code"),
      React.createElement("p", {id: "p1"}, "This is a paragraph inside the child div.")
    ]),
    React.createElement("div", { id: "sibling" }, [
      React.createElement("h1", { id: "heading" }, "Hello, this is my 1st React code"),
      React.createElement("p", {id: "p2"}, "This is a paragraph inside the sibling div.")
    ])
  ]
); //creating a parent div

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello, this is my 1st React code"
// ); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //rendering the element to the root
