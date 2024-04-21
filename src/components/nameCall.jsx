import React from "react";

export default function NameCall(props) {
  return (
    <>
      {/* <div>NameCall</div> */}
      <ul>
        {props.nackName.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
