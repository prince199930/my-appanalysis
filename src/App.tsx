import { useEffect, useState } from "react";
import LineBar from "./components/LineBar/LineBar";
import { data } from "./components/assets/data";
import ScatterPlot from "./components/ScatterPlot/ScatterPlot";

const App = () => {

  const [alcohol, setalcohol] = useState<number[]>([]);
  const [status, setStatus] = useState<boolean>(false)
  const [malic, setMalic] = useState<number[]>([])
  const [malAvg, setmalAvg] = useState<string[]>([]); // this is for calculting the average value calculting for Alchohol and Malic Acid
  const [finalArr, setFinalArr] = useState<number[]>([]) // this is for to combine array for scatter plot ex->[[1,2][3,4]] combined data are Color Intensity and Hue

  const mpData = () => {

    var tempAlocholArr: number[] = [];
    var tempMalicArr: number[] = [];
    var concatArr: any[] = [];
    var finalConcat: any[] = [];
    var avgValue: any = []
    data.map((item, index) => {
      tempAlocholArr[index] = item.Alcohol;
      tempMalicArr[index] = item.Malic_Acid;
    });
    setalcohol(tempAlocholArr);
    setMalic(tempMalicArr)

    setStatus(true)
    data.map((items, index) => {
      avgValue[index] = (items.Alcohol + items.Malic_Acid) / 2

    })
    setmalAvg(avgValue)

    data.map((d, index) => {
      concatArr[0] = d.Color_intensity;
      concatArr[1] = d.Hue;
      finalConcat[index] = concatArr;
      concatArr = []
    })
    setFinalArr(finalConcat);
  }

  useEffect(() => {
    mpData();
  }, []);

  return (
    <div className="App">
      <div style={{ margin: "5px", justifyContent: "center" }}>
        <h1 style={{ marginLeft: "400px", }}>Bar Plot</h1>
        {status ? <LineBar Alcohol={alcohol} malAvg={malAvg} malic={malic} /> : <></>}
      </div>
      <div style={{ margin: "5px", justifyContent: "center" }}>
        <h1 style={{ marginLeft: "380px", }}>Scatter Plot</h1>
        {status ? <ScatterPlot finalArr={finalArr} /> : <></>}
      </div>
    </div>
  );
};

export default App;

