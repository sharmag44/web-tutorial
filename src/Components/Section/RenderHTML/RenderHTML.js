import React from "react";
import "./RenderHTML.css";
import Code from "../../Code/Code";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function RenderHTML() {
  return (
    <div className="RenderHTML">
      <h2>React Render HTML</h2>
      <p>
        React's goal is in many ways to render HTML in a web page. React renders
        HTML to the web page by using a function called ReactDOM.render()
      </p>
      <h3>The Render Function</h3>
      <p>
        The ReactDOM.render() function takes two arguments, HTML code and an
        HTML element. The purpose of the function is to display the specified
        HTML code inside the specified HTML element.
      </p>
      <p>
        There is another folder in the root directory of your React project,
        named "public". In this folder, there is an index.html file. You'll
        notice a single div tag in the body of this file.This is where our React
        application will be rendered.
      </p>
      <div className="Code__all">
        {" "}
        <Code data="ReactDOM.render(<p>Hello</p>, document.getElementById('root')):" />
      </div>
      <p>The result is displayed in the id='root' element:</p>
      <h5>The HTML Code</h5>
      <p>
        The HTML code in this tutorial uses JSX which allows you to write HTML
        tags inside the JavaScript code:
      </p>

      <div className="Code__all">
        <Code data="const myelement = (" />
        <Code data="<table>" />
        <Code data="<tr>" />
        <Code data="<th>Name</th>" />
        <Code data="</tr>" />
        <Code data="<tr>" />
        <Code data="<td>John </td>" />
        <Code data="</tr>" />
        <Code data="<tr></tr>" />
        <Code data="<td>Jane</td>" />
        <Code data=" </tr>" />
        <Code data="</table>" />
        <Code
          data="
ReactDOM.render(myelement, document.getElementById('root'));"
        />
      </div>
      <div className="bottom_button">
        <Button variant="success">
          <Link to="/es6">❮ Previous</Link>
        </Button>

        <Button variant="success">
          <Link to="/jsx">Next ❯</Link>
        </Button>
      </div>
    </div>
  );
}

export default RenderHTML;
