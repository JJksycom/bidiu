import "./App.scss";
import React, { useState } from "react";
// import City from "./components/city";
// import NameCall from "./components/nameCall";
// import { LetterOne, Two, Three, Four } from "./letter/one";
import Transform from "./letter/rmb_dollar转化";

function App() {
  //   const somewhere = [
  //     { id: 1, city: "Kyiv" },
  //     { id: 2, city: "Warsaw" },
  //     { id: 3, city: "湖州" },
  //   ];
  //   const nackName = ["小白", "比丢", "旺仔"];
  //   const shuju = {
  //     name: "小白",
  //     age: 18,
  //     gender: "other",
  //   };
  // const handleChange = (number) => {
  //   console.log("this number is", number);
  // };

  const money = {
    rmb: "",
    dollar: "",
  };
  const [moneystate, setMoneystate] = useState(money);
  //这里的value是输入框的值,
  const transformToRMB = (value) => {
    if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
      setMoneystate({
        dollar: value,
        rmb: value === "" ? "" : (parseFloat(value) * 6.5).toString(),
      });
    } else {
      alert("请输入数字");
    }
  };
  const transformToDollar = (value) => {
    if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
      setMoneystate({
        rmb: value,
        dollar: value === "" ? "" : (parseFloat(value) / 6.5).toString(),
      });
    } else {
      alert("请输入数字");
    }
  };

  return (
    <div className="App">
      {/* <img
        src="https://kpi.ua/files/logo.png"
        alt="badges"
        className="badges"
      ></img>
      <header className="App-header"></header>
      <City somewhere={somewhere} />
      <NameCall nackName={nackName} />
      <LetterOne />
      <Two />
      <Three>
        <div>111</div>
        <div>插槽2</div>
      </Three> */}
      {/* <Four shuju={shuju} handleChange={handleChange} /> */}

      <Transform
        text={"Dollar"}
        money={moneystate.dollar}
        transform={transformToRMB}
      />
      <Transform
        text={"RMB"}
        money={moneystate.rmb}
        transform={transformToDollar}
      />
    </div>
  );
}
export default App;
