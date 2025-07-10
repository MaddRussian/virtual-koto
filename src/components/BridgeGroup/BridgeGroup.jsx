import React from "react";
import Bridge from "../Bridge/Bridge";
import "./BridgeGroup.css";

function BridgeGroup() {
  const bridgePositions = Array.from({ length: 13 }, (_, i) => i);

  return (
    <div className="bridge-group">
      {bridgePositions.map((i) => (
        <Bridge
          key={i}
          position={i}
          isFirst={i === 0}
          isLast={i === 12}
        />
      ))}
    </div>
  );
}
