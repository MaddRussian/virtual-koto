import React from "react";
import Bridge from "../Bridge/Bridge";
import "./BridgeGroup.css";

// Hirajoshi tuning: relative horizontal positions for each bridge (0 = far left, 1 = far right)
const HIRAJOSHI_POSITIONS = [
  0.05,  // Bridge 1
  0.13,  // Bridge 2
  0.21,  // Bridge 3
  0.29,  // Bridge 4
  0.37,  // Bridge 5
  0.45,  // Bridge 6
  0.53,  // Bridge 7
  0.61,  // Bridge 8
  0.69,  // Bridge 9
  0.77,  // Bridge 10
  0.85,  // Bridge 11
  0.93,  // Bridge 12
  0.99   // Bridge 13
];

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
            left: `calc(${HIRAJOSHI_POSITIONS[i] * 100}% - 14px)`, // 14px is half bridge width
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
