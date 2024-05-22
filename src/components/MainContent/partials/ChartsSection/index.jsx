import SellButton from "components/Button";
import React from "react";
import "./index.css";
import dropdown from "assets/dropdown.svg";
import candlechart from "assets/candle-chart.svg";
import { useAppContext } from "contexts";
// import CandlestickComboChart from "../CandleStickChart";
// import NewChart from "../NewTestChart";

export default function Chart() {
  const { setIsModalOpen, setModalType } = useAppContext();

  return (
    <div className="chart__section-filter-component">
      <div className="chart__section-filters">
        <span> Time </span>
        <button>1H</button>
        <button>2H</button>
        <button>4H</button>
        <button className="active">1D</button>
        <button>1W</button>
        <button>1M</button>
        <button>
          <img src={dropdown} alt="" />
        </button>
        <button>
          <img src={candlechart} alt="" />
        </button>
        <span>Fx Indicators</span>
      </div>

      <div classNameName="" style={{ height: "300px" }}>
        {/* <CandlestickComboChart /> */}
        {/* <NewChart /> */}
      </div>

      <div className="chart__section-action-btns">
        <SellButton
          onClick={() => {
            setIsModalOpen(true);
            setModalType("buy");
          }}
          color={"#25c26e"}
          children={"Buy"}
        />
        <SellButton
          onClick={() => {
            setIsModalOpen(true);
            setModalType("sell");
          }}
          color={"#ff554a"}
          children={"Sell"}
        />
      </div>
    </div>
  );
}
