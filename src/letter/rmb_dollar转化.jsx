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
//我发现子组件就是写一个通用的壳子,真正的执行逻辑还是写到了父组件中.
//子组件:长什么样子,有什么属性;父组件进行具体的逻辑填充.

export default Transform;
