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

      <Code data="" />
    </div>
  );
}

export default Hooks;
