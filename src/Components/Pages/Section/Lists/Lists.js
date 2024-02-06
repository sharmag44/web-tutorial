import React from "react";
import Code from "../../Code/Code";
import "./Lists.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Lists() {
  return (
    <div className="Lists">
      <h2>React Lists</h2>
      <p>
        In React, you will render lists with some type of loop. The JavaScript
        map() array method is generally the preferred method.
      </p>
      <div className="Code__all">
        <Code data="function Car(props) {" />
        <Code data="return <li>I am a {props.brand}</li>;" />
        <Code data="}" />
        <Code data="" />
        <Code data="function Garage() {" />
        <Code data="const cars = ['Ford', 'BMW', 'Audi'];" />
        <Code data="return (" />
        <Code data="<>" />
        <Code data=" <h1>Who lives in my garage?</h1>" />
        <Code data="<ul>" />
        <Code data="{cars.map((car) => <Car brand={car} />)}" />
        <Code data="</ul>" />
        <Code data=" </>" />
        <Code data=");" />
        <Code data="}" />
        <Code data="" />
        <Code data="ReactDOM.render(<Garage />, document.getElementById('root'));" />
      </div>
      <div className="bottom_button">
        <Button variant="success">
          <Link to="/condition">❮ Previous</Link>
        </Button>
        <Button variant="success">
          <Link to="/hook">Next ❯</Link>
        </Button>
      </div>
    </div>
  );
}

export default Lists;
