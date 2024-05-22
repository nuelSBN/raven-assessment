import React from "react";

export default function CardBox({ icon, value, amount, profit }) {
  return (
    <div className="crypto__card-bottom-item">
      <div className="crypto__card-bottom-item-top">
        <img src={icon} alt="" />
        <span>{value}</span>
      </div>
      <div className="crypto__card-bottom-item-bottom">
        <span className={profit ? "up" : ""}>{amount}</span>
      </div>
    </div>
  );
}
