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
  const containerHeight = 650; // Should match string-group height
  const bridgeHeight = 40; // px, should match .bridge height

  return (
    <div className="bridge-group" style={{ height: containerHeight }}>
      {bridgePositions.map((i) => {
        // Improved calculation: center of string is at (i + 0.5) * (containerHeight / bridgeCount)
        const stringCenter = (i + 0.5) * (containerHeight / bridgeCount);
        const top = stringCenter - bridgeHeight;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(${10 + HIRAJOSHI_POSITIONS[i] * 80}% - 14px)`, // Squeezed into 10%-90%
              top: `${top}px`,
              zIndex: 2,
            }}
          >
            <Bridge
              position={i}
              isFirst={i === 0}
              isLast={i === bridgeCount - 1}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BridgeGroup;
