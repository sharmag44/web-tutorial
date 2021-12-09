import React from "react";
import Code from "../../Code/Code";
import "./Hooks.css";
function Hooks() {
  return (
    <div className="Hooks">
      <h2>React Hooks</h2>
      <p>
        Hooks are functions that let you “hook into” React state and lifecycle
        features from function components. Hooks don't work inside classes —
        they let you use React without classes. You can also create your own
        Hooks to reuse stateful behavior between different components.
      </p>

      <h4>Types of Hooks in React</h4>
      <p>useState Hook</p>
      <p>useEffect Hook</p>
      <p>useRef Hook</p>
      <p>useCallback Hook</p>
      <p>useMemo Hook</p>
      <p>useContext Hook</p>
      <p>useReducer Hook</p>

      <h5>useState Hook</h5>
      <p>The useState hook allows us to create state variables in a React function component.</p>
      <p> State allows us to access and update certain values in our components over time</p>

      <div className="Code__all">
        <Code data="import { useState } from 'react';" />
        <Code data="import ReactDOM from ' react-dom';" />
        <Code data="function FavoriteColor() {" />
        <Code data="const [color, setColor] = useState(' red');" />
        <Code data="  return <h1>My favorite color is {color}!</h1>" />
        <Code data="}" />
        <Code data="" />
        <Code data="ReactDOM.render(<FavoriteColor />, document.getElementById('root'));" />
      </div>

      <h5>Update State</h5>
      <p>To update our state, we use our state updater function.</p>
      <div className="Code__all">
        <Code data="import { useState } from 'react';" />
        <Code data="import ReactDOM from ' react-dom';" />
        <Code data="function FavoriteColor() {" />
        <Code data="const [color, setColor] = useState(' red');" />
        <Code data=" return (" />
        <Code data="<>" />
        <Code data=" <h1>My favorite color is {color}!</h1>" />
        <Code data="<button
        type='button'
        onClick={() => setColor('blue')}
      >Blue</button>" />
        <Code data="</>" />
        <Code data="}" />
        <Code data="" />
        <Code data="ReactDOM.render(<FavoriteColor />, document.getElementById('root'));" />
      </div>
    </div>
  );
}

export default Hooks;
