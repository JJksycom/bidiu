import React from "react";

export default function City(props) {
  return (
    <>
      <div>City_meet</div>
      {props.somewhere.map((item) => {
        return <div key={item.id}>{item.city}</div>;
      })}
    </>
  );
}

//这个item已经是props.somewhere中的每一项了
//箭头函数的函数体只有一行的时候,可以省略return
