import "./App.scss";
import React, { useState } from "react";
// import City from "./components/city";
// import NameCall from "./components/nameCall";
// import { LetterOne, Two, Three, Four } from "./letter/one";
// import Transform from "./letter/rmb_dollar转化";
import Checkboxpractice from "./components/checkboxpractice";

function App() {
  // const somewhere = [
  //   { id: 1, city: "Kyiv" },
  //   { id: 2, city: "Warsaw" },
  //   { id: 3, city: "湖州" },
  // ];
  // const nackName = ["小白", "比丢", "旺仔"];
  // const shuju = {
  //   name: "小白",
  //   age: 18,
  //   gender: "other",
  // };
  // const handleChange = (number) => {
  //   console.log("this number is", number);
  // };
  return (
    <div className="App">
      {/* <Transform />
      <img
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
      </Three>{" "}
      <Four shuju={shuju} handleChange={handleChange} /> */}
      <Checkboxpractice />
    </div>
  );
}

export default App;
