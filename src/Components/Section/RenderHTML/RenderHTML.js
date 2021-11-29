import React from "react";

function RenderHTML() {
  return (
    <div className="RenderHTML">
      <h2 style={{ marginTop: "100px" }}>React Render HTML</h2>
      <p>
        React's goal is in many ways to render HTML in a web page. React renders
        HTML to the web page by using a function called{" "}
        <strong>ReactDOM.render()</strong>
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
      <code>
        ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
      </code>
      <p>The result is displayed in the id='root' element:</p>
    </div>
  );
}

export default RenderHTML;
