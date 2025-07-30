//importing react
import ReactDOM from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
//const heading = React.createElement("h1",{id: "heading1"}, "Learn React");//React.createElement -> this creates an object -> when we render this object it will become a html element
//above is similar to the below JSX code
//jsx (Tranpiled before it reaches the JS engine)
//below is react element
const title = <h1 className="head" tabIndex="5">Learn React using JSX</h1>;//JSX is a syntax extension that looks similar to HTML, but it is actually JavaScript. It allows us to write HTML-like code within JavaScript files.
const number = 10;
//React Functional Component is just a normal javaScript Function
const HeadingComponent = () => (
    <div>
    {title} {/*JSX expression - we can use JS expressions inside JSX*/}
    {number + 5} {/*JSX expression - we can use JS expressions inside JSX*/}
    
    <h1 className="heading">Learn React Functional Components</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")); //creating a root element



root.render(<HeadingComponent />); //rendering react component

