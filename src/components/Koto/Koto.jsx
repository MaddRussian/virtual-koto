import React from "react";
import StringGroup from "../StringGroup/StringGroup";
import "./Koto.css";
import BridgeGroup from "../BridgeGroup/BridgeGroup";

function Koto() {
  return (
    <div className="koto">
      <StringGroup />
      <BridgeGroup />
    </div>
  )
}

export default Koto;
