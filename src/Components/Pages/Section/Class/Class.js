import React from "react";
import Code from "../../Code/Code";
import "./Class.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Class() {
  return (
    <div className="Class">
      <h2>Classes</h2>
      <p>
        A class is a type of function, but instead of using the keyword function
        to initiate it, we use the keyword class, and the properties are
        assigned inside a constructor() method.
      </p>
      <h3>Create a Class Component</h3>
      <p>
        When creating a React component, the component's name must start with an
        upper case letter. The component has to include the extends
        React.Component statement, this statement creates an inheritance to
        React.Component, and gives your component access to React.Component's
        functions. The component also requires a render() method, this method
        returns HTML.
      </p>

      <h4>Example</h4>

      <div className="Code__all">
        <Code data="class Car {" />
        <Code data=" render(){" />
        <Code data="return <h2>Hi, I am a Car!</h2>;" />
        <Code data="  }" />
        <Code data="    }" />
      </div>
      <p>
        Now your React application has a component called Car, which returns a
        h2tag element. To use this component in your application, use similar
        syntax as normal HTML:Car tag
      </p>
      <h5>Example</h5>
      <p>Display the Car component in the "root" element:</p>
      <div className="Code__all">
        {" "}
        <Code data="ReactDOM.render(<Car />, document.getElementById('root'));" />
      </div>
      <div className="bottom_button">
        <Button variant="success">
          <Link to="/component">❮ Previous</Link>
        </Button>

        <Button variant="success">
          <Link to="/props">Next ❯</Link>
        </Button>
      </div>
    </div>
  );
}

export default Class;
