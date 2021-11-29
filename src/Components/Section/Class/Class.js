import React from "react";
import Code from "../../Code/Code"
function Class() {
    return <div>
        <h2>Classes</h2>
        <p>
            A class is a type of function, but instead of using the keyword function
            to initiate it, we use the keyword class, and the properties are
            assigned inside a constructor() method.
        </p>
        <h3>Create a Class Component</h3>
        <p>When creating a React component, the component's name must start with an upper case letter.

            The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

            The component also requires a render() method, this method returns HTML.</p>

        <h4>Example</h4>

        <div className="Code__all">
            <Code data="class Car {" />
            <Code data=" render(){" />
            <Code data="return <h2>Hi, I am a Car!</h2>;" />
            <Code data="  }" />
            <Code data="    }" />
        </div>
    </div>;
}

export default Class;
