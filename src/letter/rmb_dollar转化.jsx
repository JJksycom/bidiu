import React from "react";

function Transform(props) {
  const handleChange = (e) => {
    props.transform(e.target.value);
  };
  return (
    <div>
      <fieldset>
        <legend>{props.text}</legend>
        <input
          type="text"
          name="transform"
          value={props.money}
          onChange={handleChange}
        />
      </fieldset>
    </div>
  );
}

export default Transform;
