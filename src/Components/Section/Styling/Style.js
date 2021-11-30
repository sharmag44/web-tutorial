import React from "react";
import Code from "../../Code/Code"
export default function Style() {
  return <div style={{ marginTop: "100px" }} className="Style">
    <h1>Styling React Using CSS</h1>
    <p>There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:</p>
    <ul>
      <li><p>Inline Styling</p></li>
      <li><p>CSS Stylesheet</p></li>
      <li><p>CSS Modules</p></li>
    </ul>
    <h3>Inline Styling</h3>
    <p>To style an element with the inline style attribute, the value must be a JavaScript object:</p>
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
  </div>
}
