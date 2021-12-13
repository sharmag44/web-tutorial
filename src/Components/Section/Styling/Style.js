import React from "react";
import Code from "../../Code/Code";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function Style() {
  return (
    <div className="Style">
      <h1>Styling React Using CSS</h1>
      <p>
        There are many ways to style React with CSS, this tutorial will take a
        closer look at three common ways:
      </p>
      <ul>
        <li>
          <p>Inline Styling</p>
        </li>
        <li>
          <p>CSS Stylesheet</p>
        </li>
        <li>
          <p>CSS Modules</p>
        </li>
      </ul>
      <h3>Inline Styling</h3>
      <p>
        To style an element with the inline style attribute, the value must be a
        JavaScript object:
      </p>
      <h4>Example</h4>
      <div className="Code__all">
        <Code data="const Header = () => {" />
        <Code data=" return (" />
        <Code data="<>" />
        <Code data="<h1 style={{color: 'red'}}>Hello Style!</h1>" />
        <Code data="<p>Add a little style!</p>" />
        <Code data=" </>" />
        <Code data=");" />
        <Code data="}" />
      </div>

      <h3>camelCased Property Names</h3>

      <p>
        Since the inline CSS is written in a JavaScript object, properties with
        hyphen separators, like background-color, must be written with camel
        case syntax:
      </p>
      <p>Use backgroundColor instead of background-color:</p>
      <div className="Code__all">
        <Code data="const Header = () => {" />
        <Code data=" return (" />
        <Code data="<>" />
        <Code data="<h1 style={{backgroundColor: 'lightblue'}}>Hello Style!</h1>" />
        <Code data="<p>Add a little style!</p>" />
        <Code data=" </>" />
        <Code data=");" />
        <Code data="}" />
      </div>

      <h3>JavaScript Object</h3>
      <div className="Code__all">
        <Code data="const Header = () => {" />
        <Code data=" const myStyle = {" />
        <Code data="backgroundColor:'Dodgerblue" />
        <Code data="padding:'10px" />
        <Code data="fontFamily:'Sanserif }" />
        <Code data=" return(" />
        <Code data="<>" />
        <Code data="<h1 style={myStyle}>Hello Style!</h1>" />
        <Code data="<p>Add a little style!</p>" />
        <Code data=");" />
        <Code data="}" />
      </div>
      <div className="bottom_button">
        <Button variant="success">
          <Link to="/memo">❮ Previous</Link>
        </Button>
      </div>
    </div>
  );
}
