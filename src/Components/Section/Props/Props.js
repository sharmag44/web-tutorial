import React from "react";
import Code from "../../Code/Code";
import "./Props.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Props() {
  return (
    <div className="Props">
      <h2>React Props</h2>
      <p>Props are arguments passed into React Components.</p>
      <p>
        Props are passed to components via HTML attributes, Props are Stand for
        Properties.
      </p>

      <h5>Example</h5>
      <Code data="const myelement = <Car brand='Ford'/>" />
      <p>The component receives the argument as a props object:</p>

      <h5>Example</h5>
      <p>Use the brand attribute in the component:</p>
      <div className="Code__all">
        <Code data="function Car(props) {" />
        <Code data="  return <h2>I am a { props.brand }!</h2>;" />
        <Code data="}" />
      </div>

      <h5>Pass Data</h5>
      <p>
        Props are also how you pass data from one component to another, as
        parameters.
      </p>
      <h5>Example</h5>
      <div className="Code__all">
        <Code data="function Car(props) {" />
        <Code data="  return <h2>I am a { props.brand }!</h2>;" />
        <Code data="}" />
        <Code data="" />
        <Code data="function Garage() { {" />
        <Code data="  return (" />
        <Code data="<>" />
        <Code data="<h1>Who lives in my garage?</h1>" />
        <Code data="<Car brand='Ford' />" />
        <Code data="</>" />
        <Code data=");" />
        <Code data="}" />
        <Code data="ReactDOM.render(<Garage />, document.getElementById('root'));" />
      </div>
      <div className="bottom_button">
        <Button variant="success">
          <Link to="/class">❮ Previous</Link>
        </Button>

        <Button variant="success">
          <Link to="/events">Next ❯</Link>
        </Button>
      </div>
    </div>
  );
}

export default Props;
