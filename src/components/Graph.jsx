import React, { useState } from "react";
import Chart from "react-apexcharts";

const Graph = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      forecastDataPoints: {
        count: 2,
        strokeWidth: 3,

        dashArray: 10,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#7181c0"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ["#bfcbf3"],
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (val) => {
            return "$" + val + " M";
          },
        },
      },
      xaxis: {
        categories: [
          "",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
        ],
        min: "Jan",
        max: "May",
      },
    },
    series: [
      {
        name: "Report",
        data: [30, 40, 45, 50, 49, 60, 80, 91],
      },
    ],
    colors: ["#bfcbf3"],
  });

  return (
    <div className=" h-[60vh] relative">
      <div className=" hidden lg:block absolute right-32 bottom-36 text-[#6585ec]">
        Our Predictions
      </div>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="100%"
        height="340px"
      />
    </div>
  );
};

export default Graph;
