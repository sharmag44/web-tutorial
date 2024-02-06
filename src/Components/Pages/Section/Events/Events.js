import React from "react";
import Code from "../../Code/Code";
import "./Events.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Events() {
  return (
    <div className="Events">
      <h2>React Events</h2>
      <p>
        Just like HTML DOM events, React can perform actions based on user
        events. React has the same events as HTML: click, change, mouseover etc.
      </p>

      <h5>Adding Events </h5>
      <p>React Events are written in camelCase syntax:</p>
      <p>onClick instead of onclick</p>
      <p>React event handlers are written inside curly braces: </p>
      <div className="Code__all">
        <Code data="onClick={shoot}  instead of onClick='shoot()'" />
      </div>

      <h5> Example</h5>
      <p>Put the shoot function inside the Football component:</p>
      <div className="Code__all">
        <Code data="function Football() {" />
        <Code data="const shoot = () => {" />
        <Code data="alert('Great Shot!');" />
        <Code data="}" />
        <Code data="" />
        <Code data="return (" />
        <Code data="<button onClick={shoot}>Take the shot!</button>" />
        <Code data=" );" />
        <Code data="}" />
        <Code data="" />
        <Code data="ReactDOM.render(<Football />, document.getElementById('root'));" />
      </div>
      <h4>Passing Arguments</h4>
      <h5>Example</h5>
      <p>
        Send "Goal!" as a parameter to the shoot function, using arrow function
      </p>
      <div className="Code__all">
        <Code data="function Football() {" />
        <Code data="const shoot = (a) => {" />
        <Code data="alert(a);" />
        <Code data="}" />
        <Code data="" />
        <Code data="return (" />
        <Code data="<button onClick={() => shoot(' Goal!')}>Take the shot!</button>" />
        <Code data=" );" />
        <Code data="}" />
        <Code data="" />
        <Code data="ReactDOM.render(<Football />, document.getElementById('root'));" />
      </div>
      <div className="bottom_button">
        <Button variant="success">
          <Link to="/props">❮ Previous</Link>
        </Button>
        <Button variant="success">
          <Link to="/condition">Next ❯</Link>
        </Button>
      </div>
    </div>
  );
}

export default Events;
