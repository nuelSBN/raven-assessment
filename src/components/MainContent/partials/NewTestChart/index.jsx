// src/App.js
import React from "react";
import { ChartCanvas, Chart } from "react-financial-charts";
import {
  BarSeries,
  CandlestickSeries,
} from "react-financial-charts/lib/series";
import { XAxis, YAxis } from "react-financial-charts/lib/axes";
import { timeIntervalBarWidth } from "react-financial-charts/lib/utils";
import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";
import { fitWidth } from "react-financial-charts/lib/helper";
import { discontinuousTimeScaleProvider } from "react-financial-charts/lib/scale";
import { timeFormat } from "d3-time-format";
import { last } from "react-financial-charts/lib/utils";
// import { mockData } from "./data";

const mockData = [
  {
    date: new Date(2022, 2, 21),
    open: 36400,
    high: 36600,
    low: 36000,
    close: 36200,
  },
  {
    date: new Date(2022, 2, 28),
    open: 36200,
    high: 36600,
    low: 36100,
    close: 36500,
  },
  {
    date: new Date(2022, 3, 7),
    open: 36500,
    high: 36800,
    low: 36300,
    close: 36400,
  },
  {
    date: new Date(2022, 3, 14),
    open: 36400,
    high: 36500,
    low: 36200,
    close: 36300,
  },
  // Add more data points as needed
];

const CandlestickChart = ({ data, width, ratio }) => {
  const margin = { left: 0, right: 50, top: 0, bottom: 30 };
  const height = 400;
  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
    (d) => d.date
  );
  const {
    data: chartData,
    xScale,
    xAccessor,
    displayXAccessor,
  } = xScaleProvider(data);
  const xExtents = [
    xAccessor(last(chartData)),
    xAccessor(chartData[Math.max(0, chartData.length - 150)]),
  ];

  return (
    <ChartCanvas
      height={height}
      width={width}
      ratio={ratio}
      margin={margin}
      type="hybrid"
      seriesName="BTC/USD"
      data={chartData}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xExtents={xExtents}
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        <XAxis
          axisAt="bottom"
          orient="bottom"
          ticks={6}
          tickFormat={timeFormat("%Y-%m-%d")}
        />
        <YAxis axisAt="right" orient="right" ticks={5} />
        <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
      </Chart>
    </ChartCanvas>
  );
};

const FitWidthCandlestickChart = fitWidth(CandlestickChart);

const App = () => {
  return (
    <div className="App">
      <h1>BTC/USD Candlestick Chart</h1>
      <div className="chart-container">
        <FitWidthCandlestickChart data={mockData} />
      </div>
      <div className="buttons">
        <button className="buy-button">Buy</button>
        <button className="sell-button">Sell</button>
      </div>
    </div>
  );
};

export default App;
