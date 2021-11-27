import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {} from "react-router-bootstrap";

export default function Header() {
  return (
    <div className="Header">
      <div className="Container">
        <div className="row">
          <div className="col-lg-4 col-md-4" id="navbar">
            <ul>
              <li>What is React ?</li>
              <li>Getting Started</li>
              <li>What is ES6 ?</li>
              <li>Render HTML</li>
              <li>JSX</li>
              <li>Components</li>
              <li>Class</li>
              <li>Props</li>
              <li>Events</li>
              <li>Conditionals</li>
              <li>Lists</li>
              <li>Hooks</li>
              <li>Forms</li>
              <li>Router</li>
              <li>Memo</li>
              <li>Styling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
