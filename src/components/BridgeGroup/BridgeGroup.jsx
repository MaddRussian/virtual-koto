import React from "react";
import Bridge from "../Bridge/Bridge";
import "./BridgeGroup.css";

// Hirajoshi tuning: more realistic, clustered and spread horizontal positions for each bridge (0 = far left, 1 = far right)
const HIRAJOSHI_POSITIONS = [
  0.05,  // Bridge 1
  0.12,  // Bridge 2 (closer to 1)
  0.19,  // Bridge 3 (closer to 2)
  0.32,  // Bridge 4 (bigger jump)
  0.39,  // Bridge 5 (closer to 4)
  0.46,  // Bridge 6 (closer to 5)
  0.60,  // Bridge 7 (bigger jump)
  0.67,  // Bridge 8 (closer to 7)
  0.74,  // Bridge 9 (closer to 8)
  0.81,  // Bridge 10 (closer to 9)
  0.88,  // Bridge 11 (closer to 10)
  0.94,  // Bridge 12 (closer to 11)
  0.99   // Bridge 13 (end)
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
