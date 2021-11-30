import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import {} from "react-router-bootstrap";

export default function Header() {
  return (
    <div className="Header">
      <div className="Container">
        <div className="row">
          <div className="col-lg-4 col-md-4" id="navbar">
            <ul>
              <li>
                <Link to="/">What is React ?</Link>
              </li>
              <li>
                <Link to="/install">Getting Started</Link>
              </li>
              <li>
                <Link to="/es6">What is ES6 ?</Link>
              </li>
              <li>
                <Link to="/render">Render HTML</Link>
              </li>
              <li>
                <Link to="/jsx">JSX</Link>
              </li>
              <li>
                <Link to="/component">Components</Link>
              </li>
              <li>
                <Link to="/class">Class</Link>
              </li>
              <li>
                <Link to="/props">Props</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/condition">Conditionals</Link>
              </li>
              <li>
                <Link to="/list">Lists</Link>
              </li>
              <li>
                <Link to="/hook">Hooks</Link>
              </li>
              <li>
                <Link to="/form">Forms</Link>
              </li>
              <li>
                <Link to="/router">Router</Link>
              </li>
              <li>
                <Link to="/memo">Memo</Link>
              </li>
              <li>
                <Link to="/style">Styling</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
