import React from "react";

export default function NameCall(props) {
  return (
    <>
      {/* <div>NameCall</div> */}
      {props.nackName.map((item) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        );
      })}
    </>
  );
}
