import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

export default function Tooltip() {
  return (
    <div className="tooltip">
      <h1 className="title">Tooltip</h1>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={"Basic Tooltip"} delay={2000}>
          <button className="btn">Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          placement="right-end"
          content={
            <span
              style={{
                color: "white",
                padding: "10px",
                fontSize: "20px",
              }}
            >
              Basic Tooltip
            </span>
          }
        >
          <button className="btn">Hover</button>
        </Tippy>
      </div>
    </div>
  );
}
