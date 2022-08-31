import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

interface IProps {
  malAvg: string[];
  Alcohol: number[]
  malic: number[]
}


const LineBar = (props: IProps) => {
  const [options, setoptions] = useState({
    grid: {
      zlevel: 0,
      x: 50,
      x2: 50,
      y: 30,
      y2: 30,
      borderWidth: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgba(0,0,0,0)"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999"
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    color: ["#3c4ccf", "#02a499", "#38a4f8"],
    legend: {
      data: ["Alcohol", "MalicAcid", "Average Value"],
      textStyle: {
        color: ["#74788d"]
      }
    },
    xAxis: [
      {
        type: "category",
        data: ["0.2", "0.4", "0.6", "0.8", "0.9", "0.10", "1.0"],
        axisPointer: {
          type: "shadow"
        },
        axisLine: {
          lineStyle: {
            color: "#74788d"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "Alcohol",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value} ml"
        },
        axisLine: {
          lineStyle: {
            color: "#74788d"
          }
        }
      },
      {
        type: "value",
        name: "Malic Acid",
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: "{value} °C"
        }
      }
    ],
    series: [
      {
        name: "Alcohol",
        type: "bar",
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2]
      },
      {
        name: "MalicAcid",
        type: "bar",
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2]
      },
    ],
    textStyle: {
      color: ["#74788d"]
    }
  });
  useEffect(() => {
    setoptions({
      grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 200,
        backgroundColor: "red",
        borderColor: "rgba(0,0,0,0)"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      color: ["#3c4ccf", "#02a499", "#38a4f8"],
      legend: {
        data: ["Alcohol", "MalicAcid", "Average Value"],
        textStyle: {
          color: ["#74788d"]
        }
      },
      xAxis: [
        {
          type: "category",
          data: props.malAvg,
          axisPointer: {
            type: "shadow"
          },
          axisLine: {
            lineStyle: {
              color: "#74788d"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "Alcohol",
          min: 0,
          max: 3,
          interval: 0.3,
          axisLabel: {
            formatter: "{value} ml"
          },
          axisLine: {
            lineStyle: {
              color: "#74788d"
            }
          }
        },
        {
          type: "value",
          name: "Malic Acid",
          min: 0,
          max: 15,
          interval: 1,
          axisLabel: {
            formatter: "{value} °ml"
          }
        }
      ],
      series: [

        {
          name: "Alcohol",
          type: "bar",
          data: props.Alcohol
        },
        {
          name: "MalicAcid",
          type: "bar",
          data: props.malic
        }
      ],
      textStyle: {
        color: ["#74788d"]
      }
    });
  }, []);
  return (
    <React.Fragment>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </React.Fragment>
  );
};
export default LineBar;
