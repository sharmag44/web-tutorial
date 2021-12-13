import React from "react";
import Code from "../../Code/Code";
import "./JSX.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function JSX() {
  return (
    <div className="JSX">
      <h2>React JSX</h2>
      <h3>What is JSX?</h3>
      <p>
        JSX stands for JavaScript XML. It is simply a syntax extension of
        JavaScript. It allows us to directly write HTML in React (within
        JavaScript code). It is easy to create a template using JSX in React,
        but it is not a simple template language instead it comes with the full
        power of JavaScript.SX allows us to write HTML elements in JavaScript
        and place them in the DOM without any createElement() and/or
        appendChild() methods. JSX converts HTML tags into react elements.
      </p>
      <h4>Example</h4>
      <div className="Coding__all">
        <Code data="const myelement = <h1>I Love React!</h1>;" />
        <Code data="ReactDOM.render(myelement, document.getElementById('root'));" />
      </div>

      <h4>Example 2</h4>
      <div className="Coding__all">
        <Code data="const myelement = React.createElement('h1', {}, 'I do not use JSX!');" />
        <Code data="ReactDOM.render(myelement, document.getElementById('root'));" />
      </div>

      <h4>Elements Must be Closed</h4>
      <p>
        JSX follows XML rules, and therefore HTML elements must be properly
        closed.
      </p>
      <div className="Coding__all">
        <Code data="const myelement = <input type=' text' />;" />
      </div>
      <h4>Attribute class = className</h4>
      <p>
        The class attribute is a much used attribute in HTML, but since JSX is
        rendered as JavaScript, and the class keyword is a reserved word in
        JavaScript, you are not allowed to use it in JSX.
      </p>
      <h6>Use attribute className instead.</h6>
      <h5>Example</h5>
      <div className="Coding__all">
        <Code data="const myelement = <h1 className=' myclass'>Hello World</h1>s;" />
      </div>

      <div className="bottom_button">
        <Button variant="success">
          <Link to="/render">❮ Previous</Link>
        </Button>

        <Button variant="success">
          <Link to="/component">Next ❯</Link>
        </Button>
      </div>
    </div>
  );
}

export default JSX;
