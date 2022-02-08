import { PieChart } from "./component/PieChart";
import React, { useState } from "react";
import "./App.css";
import { Barchart } from "./component/Barchart";
import { Form } from "./component/Form";
import { Header } from "./component/Header";
import { LineChart } from "./component/LineChart";
import { UserData } from "./Data";

function App() {
  const [userData, setuserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Yillik daromad",
        data: UserData.map((data) => data.yillikdaromad),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="App">
      <Header />
      <Form />

      <div className="chart">
        <div className="barchart">
          <Barchart chartData={userData} />
          <LineChart chartData={userData}/>
          <PieChart chartData={userData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
