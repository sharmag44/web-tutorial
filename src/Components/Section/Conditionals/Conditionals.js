import React from "react";
import Code from "../../Code/Code";
function Conditionals() {
  return (
    <div>
      <h2 style={{ marginTop: "100px" }}>React Conditionals Rendering</h2>
      <p>
        In React, you can conditionally render components. There are several
        ways to do this.
      </p>

      <h3>if Statement</h3>
      <p>
        We can use the if JavaScript operator to decide which component to
        render.
      </p>
      <h5>Example</h5>
      <div className="Code__all">
        <Code data="function MissedGoal() {" />
        <Code data="return <h1>MISSED!</h1>;" />
        <Code data="}" />
        <Code data="" />
        <Code data="function MadeGoal() {" />
        <Code data="return <h1>Goal!</h1>;" />
        <Code data="}" />
      </div>
      <h5>Example 2</h5>
      <div className="Code__all">
        <Code data="function Goal(props) { {" />
        <Code data=" const isGoal = props.isGoal;" />
        <Code data="if (isGoal) {" />
        <Code data="}" />
        <Code data="return <MissedGoal/>;" />
        <Code data="" />
        <Code data="ReactDOM.render(" />
        <Code data=" <Goal isGoal={false} />," />
        <Code data="document.getElementById('root')" />
        <Code data=");" />
      </div>
      <h3>Ternary Operator</h3>
      <p>
        Another way to conditionally render elements is by using a ternary
        operator.
      </p>
      <div className="Code__all">
        <Code data="condition ? true : false" />
      </div>
      <h5>Example:</h5>
      <div className="Code__all">
        <Code data="function Goal(props) {" />
        <Code data="const isGoal = props.isGoal;" />
        <Code data=" return (" />
        <Code data="<>" />
        <Code data=" { isGoal ? <MadeGoal/> : <MissedGoal/> }" />
        <Code data=" </>" />
        <Code data=" );" />
        <Code data="}" />
        <Code data="ReactDOM.render(" />
        <Code data=" <Goal isGoal={false} />," />
        <Code data="document.getElementById('root')" />
        <Code data=");" />
      </div>
    </div>
  );
}

export default Conditionals;
