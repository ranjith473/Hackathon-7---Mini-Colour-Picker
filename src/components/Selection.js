import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const [state, setState] = useState({ background: "" });

  const color = props.applyColor;

  return (
    <div
      className="fix-box"
      style={state}
      onClick={() => {
        color(setState);
        console.log(setState);
      }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
