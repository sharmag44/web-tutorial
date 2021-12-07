import React from "react";
import Code from "../../Code/Code";

export default function Memo() {
  return (
    <div>
      <h2>React Memo</h2>
      <p>
        Using memo will cause React to skip rendering a component if its props
        have not changed.This can improve performance.
      </p>
      <h5>Problem</h5>
      <p>
        In this example, the Todos component re-renders even when the todos have
        not changed.
      </p>
      <p>index.js</p>
      <div className="Code__all">
        <Code data="import { useState } from ''react';" />
        <Code
          data="import ReactDOM from 'react-dom';
"
        />
        <Code data="import Todos from './Todos';" />
        <Code data="" />
        <Code data="const App = () => {" />
        <Code data="const [count, setCount] = useState(0);" />
        <Code data="const [todos, setTodos] = useState(['todo 1', 'todo 2']);" />
        <Code data="" />
        <Code data="return (" />
        <Code data=" <>" />
        <Code data="<Todos todos={todos} />" />
        <Code data="<hr />" />
        <Code data="<div>" />
        <Code data="Count : {count}" />
        <Code data="<button onClick={() => {setCount(count+1)}}>+</button>" />
        <Code data="</div>" />
        <Code data="</>" />
        <Code data=")'" />
        <Code data="};" />
        <Code data="" />
        <Code data="ReactDOM.render(<App />, document.getElementById('root'));" />
      </div>
      <p>Todos.js</p>
      <div className="Code__all">
        <Code data="const Todos = ({ todos }) => {" />
        <Code data="console.log('child render')" />
        <Code data="return (" />
        <Code data="<>" />
        <Code data="<h2>My Todos</h2>" />
        <Code data="{todos.map((todo, index) => {" />
        <Code data="return <p key={index}>{todo}</p>;" />
        <Code data="})}" />
        <Code data="</>" />
        <Code data=");" />
        <Code data="};" />
        <Code data="" />
        <Code data="export default Todos;" />
      </div>

      <h4>Solution</h4>
      <p>
        To fix this we can use memo, use memo to keep the Todos component from
        needlessly re-rendering wrap Todos component export in memo
      </p>
      <p>index.js</p>
      <div className="Code__all">
        <Code data="import { useState } from ''react';" />
        <Code
          data="import ReactDOM from 'react-dom';
"
        />
        <Code data="import Todos from './Todos';" />
        <Code data="" />
        <Code data="const App = () => {" />
        <Code data="const [count, setCount] = useState(0);" />
        <Code data="const [todos, setTodos] = useState(['todo 1', 'todo 2']);" />
        <Code data="" />
        <Code data="return (" />
        <Code data=" <>" />
        <Code data="<Todos todos={todos} />" />
        <Code data="<hr />" />
        <Code data="<div>" />
        <Code data="Count : {count}" />
        <Code data="<button onClick={() => {setCount(count+1)}}>+</button>" />
        <Code data="</div>" />
        <Code data="</>" />
        <Code data=")'" />
        <Code data="};" />
        <Code data="" />
        <Code data="ReactDOM.render(<App />, document.getElementById('root'));" />
      </div>
      <p>Todos.js</p>
      <div className="Code__all">
        <Code data="import {memo} from 'react';" />
        <Code data="const Todos = ({ todos }) => {" />
        <Code data="console.log('child render')" />
        <Code data="return (" />
        <Code data="<>" />
        <Code data="<h2>My Todos</h2>" />
        <Code data="{todos.map((todo, index) => {" />
        <Code data="return <p key={index}>{todo}</p>;" />
        <Code data="})}" />
        <Code data="</>" />
        <Code data=");" />
        <Code data="};" />
        <Code data="" />
        <Code data="export default memo(Todos);" />
      </div>
    </div>
  );
}
