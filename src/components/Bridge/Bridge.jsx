import React from "react";
import "./Bridge.css";

function Bridge( {isFirst, isLast, position } ) {
  let className = "bridge";
  if (isFirst) className += " bridge-first";
  else if (isLast) className += " bridge-last";
  else className += ` bridge-${position}`;

  return (
    <div className={className}>
      <span> { position + 1 } </span>
    </div>
  )
}

export default Bridge;
