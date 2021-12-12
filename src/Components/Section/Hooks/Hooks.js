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
      <p>
        The useState hook allows us to create state variables in a React
        function component.
      </p>
      <p>
        {" "}
        State allows us to access and update certain values in our components
        over time
      </p>

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
        <Code
          data="<button
        type='button'
        onClick={() => setColor('blue')}
      >Blue</button>"
        />
        <Code data="</>" />
        <Code data="}" />
        <Code data="" />
        <Code data="ReactDOM.render(<FavoriteColor />, document.getElementById('root'));" />
      </div>

      <h4>React useEffect Hooks</h4>
      <p>The useEffect Hook allows you to perform side effects in your components.

        Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
      <p>useEffect accepts two arguments. The second argument is optional. useEffect function, dependency</p>

      <h5>Example</h5>
      <p>Use setTimeout() to count 1 second after initial render:</p>
      <div className="Code__all">
        <Code data="import { useState, useEffect } from ' react';" />
        <Code data="import ReactDOM from ' react-dom';
" />
        <Code data="function Timer() {" />
        <Code data="const [count, setCount] = useState(0);" />
        <Code data="" />
        <Code data="useEffect(() => {" />
        <Code data="setTimeout(() => {" />
        <Code data="setCount((count) => count + 1);" />
        <Code data="}, 1000);" />
        <Code data=" });" />
        <Code data="return <h1>I've rendered {count} times!</h1>;
" />
        <Code data="  }" />
        <Code data="" />
        <Code data="ReactDOM.render(<Timer />, document.getElementById('root'));" />
      </div>
      <p>But wait!! I keeps counting even though it should only count once!</p>
      <p>useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</p>
      <p>This is not what we want. There are several ways to control when side effects run.

        We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>
      <h5>1. No dependency passed:</h5>
      <div className="Code__all">
        <Code data="useEffect(() => {" />
        <Code data="//Runs on every render });" />
      </div>

      <h5>2. An empty array:</h5>
      <div className="Code__all">
        <Code data="useEffect(() => {" />
        <Code data="//Runs only on the first render },[]);" />
      </div>
      <div className="Code__all">
        <Code data="useEffect(() => {" />
        <Code data="//Runs on the first render" />
        <Code data="//And any time any dependency value changes" />
        <Code data=" },[prop, state]);" />
      </div>
      <h5>Example</h5>
      <div className="Code__all">
        <Code data="import { useState, useEffect } from ' react';" />
        <Code data="import ReactDOM from ' react-dom';
" />
        <Code data="function Counter() {" />
        <Code data="const [count, setCount] = useState(0);" />
        <Code data="const [calculation, setCalculation] = useState(0);" />
        <Code data="useEffect(() => {" />
        <Code data=" setCalculation(() => count * 2);" />
        <Code data=" }, [count]); // <- add the count variable here" />
        <Code data="return (" />
        <Code data="<>" />
        <Code data="<p>Count: {count}</p>" />
        <Code data="<button onClick={() => setCount((c) => c + 1)}>+</button>" />
        <Code data="<p>Calculation: {calculation}</p>" />
        <Code data=" </>" />
        <Code data=");" />
        <Code data="}" />
        <Code data="ReactDOM.render(<Timer />, document.getElementById('root'));" />
      </div>

      <h5>React useContext Hook</h5>
      <p>React Context is a way to manage state globally.

        It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
      <h6>The Problem</h6>
      <p>State should be held by the highest parent component in the stack that requires access to the state.

        To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

        To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".</p>
    </div >
  );
}

export default Hooks;
