import React from "react";
import ReactApexChart from "react-apexcharts";

const CandlestickComboChart = () => {
  const seriesData = [
    {
      x: new Date(1538778600000),
      y: [6629.81, 6650.5, 6623.04, 6633.33],
    },
    {
      x: new Date(1538780400000),
      y: [6632.01, 6643.59, 6620, 6630.11],
    },
    {
      x: new Date(1538782200000),
      y: [6630.71, 6648.95, 6623.34, 6635.65],
    },
    {
      x: new Date(1538784000000),
      y: [6635.65, 6651, 6629.67, 6638.24],
    },
    {
      x: new Date(1538785800000),
      y: [6638.24, 6640, 6620, 6624.47],
    },
    {
      x: new Date(1538787600000),
      y: [6624.53, 6636.03, 6621.68, 6624.31],
    },
    {
      x: new Date(1538789400000),
      y: [6624.61, 6632.2, 6617, 6626.02],
    },
    {
      x: new Date(1538791200000),
      y: [6627, 6627.62, 6584.22, 6603.02],
    },
    {
      x: new Date(1538793000000),
      y: [6605, 6608.03, 6598.95, 6604.01],
    },
    {
      x: new Date(1538794800000),
      y: [6604.5, 6614.4, 6602.26, 6608.02],
    },
    {
      x: new Date(1538796600000),
      y: [6608.02, 6610.68, 6601.99, 6608.91],
    },
    {
      x: new Date(1538798400000),
      y: [6608.91, 6618.99, 6608.01, 6612],
    },
    {
      x: new Date(1538800200000),
      y: [6612, 6615.13, 6605.09, 6612],
    },
    {
      x: new Date(1538802000000),
      y: [6612, 6624.12, 6608.43, 6622.95],
    },
    {
      x: new Date(1538803800000),
      y: [6623.91, 6623.91, 6615, 6615.67],
    },
    {
      x: new Date(1538805600000),
      y: [6618.69, 6618.74, 6610, 6610.4],
    },
    {
      x: new Date(1538807400000),
      y: [6611, 6622.78, 6610.4, 6614.9],
    },
    {
      x: new Date(1538809200000),
      y: [6614.9, 6626.2, 6613.33, 6623.45],
    },
    {
      x: new Date(1538811000000),
      y: [6623.48, 6627, 6618.38, 6620.35],
    },
    {
      x: new Date(1538812800000),
      y: [6619.43, 6620.35, 6610.05, 6615.53],
    },
    {
      x: new Date(1538814600000),
      y: [6615.53, 6617.93, 6610, 6615.19],
    },
    {
      x: new Date(1538816400000),
      y: [6615.19, 6621.6, 6608.2, 6620],
    },
    {
      x: new Date(1538818200000),
      y: [6619.54, 6625.17, 6614.15, 6620],
    },
    {
      x: new Date(1538820000000),
      y: [6620.33, 6634.15, 6617.24, 6624.61],
    },
    {
      x: new Date(1538821800000),
      y: [6625.95, 6626, 6611.66, 6619],
    },
    {
      x: new Date(1538823600000),
      y: [6619, 6625.97, 6613.12, 6625.01],
    },
    {
      x: new Date(1538825400000),
      y: [6625.01, 6629.01, 6619.55, 6628.99],
    },
    {
      x: new Date(1538827200000),
      y: [6628.99, 6629.99, 6615, 6618.69],
    },
    {
      x: new Date(1538829000000),
      y: [6618.69, 6625, 6618.65, 6620],
    },
    {
      x: new Date(1538830800000),
      y: [6619.54, 6625.17, 6614.15, 6620],
    },
  ];

  const seriesDataLinear = [
    {
      x: new Date(1538778600000),
      y: 100,
    },
    {
      x: new Date(1538780400000),
      y: 150,
    },
    {
      x: new Date(1538782200000),
      y: 200,
    },
    {
      x: new Date(1538784000000),
      y: 250,
    },
    {
      x: new Date(1538785800000),
      y: 300,
    },
    {
      x: new Date(1538787600000),
      y: 350,
    },
    {
      x: new Date(1538789400000),
      y: 400,
    },
    {
      x: new Date(1538791200000),
      y: 450,
    },
    {
      x: new Date(1538793000000),
      y: 500,
    },
    {
      x: new Date(1538794800000),
      y: 550,
    },
    {
      x: new Date(1538796600000),
      y: 600,
    },
    {
      x: new Date(1538798400000),
      y: 650,
    },
    {
      x: new Date(1538800200000),
      y: 700,
    },
    {
      x: new Date(1538802000000),
      y: 750,
    },
    {
      x: new Date(1538803800000),
      y: 800,
    },
    {
      x: new Date(1538805600000),
      y: 850,
    },
    {
      x: new Date(1538807400000),
      y: 900,
    },
    {
      x: new Date(1538809200000),
      y: 950,
    },
    {
      x: new Date(1538811000000),
      y: 1000,
    },
    {
      x: new Date(1538812800000),
      y: 1050,
    },
    {
      x: new Date(1538814600000),
      y: 1100,
    },
    {
      x: new Date(1538816400000),
      y: 1150,
    },
    {
      x: new Date(1538818200000),
      y: 1200,
    },
    {
      x: new Date(1538820000000),
      y: 1250,
    },
    {
      x: new Date(1538821800000),
      y: 1300,
    },
    {
      x: new Date(1538823600000),
      y: 1350,
    },
    {
      x: new Date(1538825400000),
      y: 1400,
    },
    {
      x: new Date(1538827200000),
      y: 1450,
    },
    {
      x: new Date(1538829000000),
      y: 1500,
    },
    {
      x: new Date(1538830800000),
      y: 1550,
    },
  ];

  const data = {
    series: [
      {
        data: seriesData,
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 290,
        id: "candles",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#00C076",
            downward: "#FF6838",
          },
        },
      },
      xaxis: {
        type: "datetime",
      },
    },

    seriesBar: [
      {
        name: "volume",
        data: seriesDataLinear,
      },
    ],
    optionsBar: {
      chart: {
        height: 160,
        type: "bar",
        brush: {
          enabled: true,
          target: "candles",
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("20 Jan 2017").getTime(),
            max: new Date("10 Dec 2017").getTime(),
          },
          fill: {
            color: "#ccc",
            opacity: 0.5,
          },
          stroke: {
            color: "#FF6838",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          columnWidth: "80%",
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: "#00C076",
              },
              {
                from: 1,
                to: 10000,
                color: "#FEB019",
              },
            ],
          },
        },
      },
      stroke: {
        width: 0,
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          offsetX: 13,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  };

  return (
    <div id="chart">
      <div id="chart-candlestick">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="candlestick"
          height={290}
        />
      </div>
      <div id="chart-bar">
        <ReactApexChart
          options={data.optionsBar}
          series={data.seriesBar}
          type="bar"
          height={160}
        />
      </div>
    </div>
  );
};

export default CandlestickComboChart;
