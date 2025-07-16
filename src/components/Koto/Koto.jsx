import React from "react";
import StringGroup from "../StringGroup/StringGroup";
import "./Koto.css";
import BridgeGroup from "../BridgeGroup/BridgeGroup";

function Koto() {
  return (
    <div className="koto">
      <div className="koto-overlay-container">
        <StringGroup />
        <BridgeGroup />
      </div>
    </div>
  )
}

export default Koto;
