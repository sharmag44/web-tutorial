import React from "react";
import Code from "../../Code/Code";
function Components() {
  return (
    <div className="Components">
      <h3 style={{ marginTop: "100px" }}>React Components</h3>
      <p>
        Components are independent and reusable bits of code. They serve the
        same purpose as JavaScript functions, but work in isolation and return
        HTML. Components come in two types, Class components and Function
        components, in this tutorial we will concentrate on Function components.
      </p>

      <h6>
        In older React code bases, you may find Class components primarily used.
        It is now suggested to use Function components along with Hooks, which
        were added in React 16.8. There is an optional section on Class
        components for your reference.
      </h6>
      <h3>Create Your First Component</h3>
      <p>
        When creating a React component, the component's name MUST start with an
        upper case letter.{" "}
      </p>
      <h4>Class Component</h4>
      <p>
        A class component must include the extends React.Component statement.
        This statement creates an inheritance to React.Component, and gives your
        component access to React.Component's functions. The component also
        requires a render() method, this method returns HTML.
      </p>

      <h5>Example</h5>
      <div className="Code__all">
        <Code data="class Car extends React.Component {" />
        <Code data="render() {" />
        <Code data="return <h2>Hi, I am a Car!</h2>;" />
        <Code data="}" />
        <Code data="  }" />
      </div>
      <h4>Function Component</h4>
      <p>
        A Function component also returns HTML, and behaves much the same way as
        a Class component, but Function components can be written using much
        less code, are easier to understand.
      </p>
      <div className="Code__all">
        <Code data="function Car() {{" />
        <Code data="return <h2>Hi, I am a Car!</h2>;" />
        <Code data="}" />
      </div>
    </div>
  );
}

export default Components;
