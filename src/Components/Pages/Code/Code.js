import "bootstrap/dist/css/bootstrap.min.css";
import "./Code.css";
import React from "react";
export default function Code(props) {
  return (
    <div className="Code">
      <code>{props.data}</code>
    </div>
  );
}
