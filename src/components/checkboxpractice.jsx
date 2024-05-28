import React, { useState } from "react";

export default function Checkboxpractice() {
  const [checkPart, setCheckPart] = useState({
    checkBox: [
      { content: "js", checked: false },
      { content: "jsx", checked: false },
      { content: "vue", checked: false },
      { content: "html", checked: false },
      { content: "python", checked: false },
      { content: "java", checked: false },
      { content: "sql", checked: false },
    ],
  });
  const handleChange = (index) => {
    const newArr = [...checkPart.checkBox];
    newArr[index].checked = !newArr[index].checked;
    setCheckPart({ checkBox: newArr });
  };
  const handleSubmit = () => {
    console.log(checkPart.checkBox.filter((item) => item.checked));
  };

  return (
    <div>
      {checkPart.checkBox.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              value={item.content}
              checked={item.checked}
              onChange={() => handleChange(index)}
            />
            <span>{item.content}</span>
          </div>
        );
      })}
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
