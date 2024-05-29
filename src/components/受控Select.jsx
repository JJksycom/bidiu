import React, { useState } from "react";

export default function ShoukongSelect(props) {
  const [optionValue, setOptionValue] = useState();

  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };
  const submitChange = () => {
    console.log(optionValue);
  };
  return (
    <div>
      <select value={optionValue} onChange={handleChange}>
        <option value="html">html</option>
        <option value="js">js</option>
        <option value="css">css</option>
        <option value="vue">vue</option>
        <option value="react">react</option>
      </select>
      <button onClick={submitChange}>提交</button>
    </div>
  );
}
