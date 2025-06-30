import React from "react";
import String from "../String/String";
import "./StringGroup.css";

function StringGroup() {
  return (
    <div className="string-group">
      {[...Array(13)].map((_, i) => (
        <String key={i} number={i + 1} />
      ))}
    </div>
  )
}

export default StringGroup;
