import React, { useEffect, useState } from "react"
import ReactEcharts from "echarts-for-react"

const ScatterPlot = (props: any) => {

  const [opt, setOpt] = useState({
    tooltip: {
      trigger: "axis",
      show: false,
    },
    toolbox: {
      show: false,
    },
    grid: {
      zlevel: 0,
      x: 50,
      x2: 50,
      y: 30,
      y2: 30,
      borderWidth: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgba(0,0,0,0)",
    },
    xAxis: [{
      min: 0,
      max: 4,
      interval: 1,
      name: "ColorIntensity",
      axisLine: {
        lineStyle: {
          color: "#74788d",
        },
      },
    }],
    yAxis: [{
      min: 0,
      max: 12,
      interval: 2,
      name: "Hue",
      axisLine: {
        lineStyle: {
          color: "#74788d",
        },
      },
    }],
    series: [
      {
        symbolSize: 10,
        data: [],
        type: "scatter",
        name: "Color",
      },
    ],
    color: ["#3c4ccf"],
  })

  useEffect(() => {
    setOpt({
      tooltip: {
        trigger: "axis",
        show: false,
      },
      toolbox: {
        show: false,
      },
      grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
      },
      xAxis: [{
        min: 0,
        max: 4,
        interval: 1,
        name: "ColorIntensity",
        axisLine: {
          lineStyle: {
            color: "#74788d",
          },
        },
      }],
      yAxis: [{
        min: 0,
        max: 12,
        interval: 2,
        name: "Hue",
        axisLine: {
          lineStyle: {
            color: "#74788d",
          },
        },
      }],
      series: [
        {
          symbolSize: 10,
          data: props.finalArr,
          type: "scatter",
          name: "Color",
        },
      ],
      color: ["#3c4ccf"],

    })
  })

  return (
    <div>
      <ReactEcharts style={{ height: "350px" }} option={opt} />
    </div>
  )
}

export default ScatterPlot