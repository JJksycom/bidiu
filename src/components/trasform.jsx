import React, { useState } from "react";
const Transform = (props) => {
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
    <div className="App-transform">
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
};
