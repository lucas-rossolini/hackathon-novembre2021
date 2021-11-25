import React, { useState } from "react";
import "./ToggleButton.css";

function ToggleButton(props) {
  return (
    <div
      onClick={props.triggerToggle}
      className={`wrg-toggle ${props.deaf ? "wrg-toggle--checked" : ""}`}
    >
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>🔇</span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>🔈</span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input
        className="wrg-toggle-input"
        type="checkbox"
        aria-label="Toggle Button"
      />
    </div>
  );
}

export default ToggleButton;
