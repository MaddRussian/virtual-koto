import React from "react";
import Bridge from "../Bridge/Bridge";
import "./BridgeGroup.css";

function BridgeGroup() {
  const bridgeCount = 13;
  const bridgePositions = Array.from({ length: bridgeCount }, (_, i) => i);
  const containerHeight = 500; // Should match string-group height
  const verticalSpacing = containerHeight / (bridgeCount - 1);

  return (
    <div className="bridge-group" style={{ height: containerHeight }}>
      {bridgePositions.map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `calc(${(i / (bridgeCount - 1)) * 100}% - 14px)`, // 14px is half bridge width
            top: i * verticalSpacing - 20, // 20px is half bridge height for centering
            zIndex: 2,
          }}
        >
          <Bridge
            position={i}
            isFirst={i === 0}
            isLast={i === bridgeCount - 1}
          />
        </div>
      ))}
    </div>
  );
}

export default BridgeGroup;
