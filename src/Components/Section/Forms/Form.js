import React from "react";
import Code from "../../Code/Code";
import "./Forms.css";
export default function Form() {
  return (
    <div className="Forms">
      <h3>React Forms</h3>
      <p>React uses forms to allow users to interact with the web page.</p>
      <h5>Adding Forms in React</h5>
      <p>You add a form with React like any other element:</p>

      <h5>Example</h5>
      <div className="Code__all">
        <Code data="function MyForm() {" />
        <Code data="return (" />
        <Code data="<form>" />
        <Code data="<label>Enter your name:" />
        <Code data=" <input type='text' /> " />
        <Code data="</label>" />
        <Code data="    </form>" />
        <Code data="   )" />
        <Code data="}" />
        <Code data="ReactDOM.render(<MyForm />, document.getElementById('root'));" />
      </div>
      <h4>Handling Forms
      </h4>
      <p>Handling forms is about how you handle the data when it changes value or gets submitted.

        In HTML, form data is usually handled by the DOM.

        In React, form data is usually handled by the components.

        When the data is handled by the components, all the data is stored in the component state.

        You can control changes by adding event handlers in the onChange attribute.

      </p>
      <h5>Example</h5>
      <div className="Code__all">
        <Code data="import React from 'react'" />
        <Code data="import ReactDOM from 'react-dom'" />
        <Code data="function MyForm() {" />
        <Code data="const [name, setName] = React.useState('');" />
        <Code data="return (" />
        <Code data="<form>" />
        <Code data="<label>Enter your name:" />
        <Code data=" <input type='text'" />
        <Code data="value='{name}'" />
        <Code data="onChange='{(e) => setName(e.target.value)}" />
        <Code data="</label>" />
        <Code data="    </form>" />
        <Code data="   )" />
        <Code data="}" />
        <Code data="ReactDOM.render(<MyForm />, document.getElementById('root'));" />

      </div>
    </div>
  );
}

