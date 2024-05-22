import React from "react";
import "./button.css";

export default function SellButton({ onClick, color, children }) {
  return (
    <button
      className="sell-btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
