import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../actions/action";

const AddTask = () => {
  const [text, SetText] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (text) {
      const newTask = {
        id: Math.floor(Math.random() * 100),
        description: text,
        isDone: false,
      };
      dispatch(add(newTask));
      SetText("");
    }
  };
  return (
    <div className="add-task">
      <input
        type="text"
        onChange={(e) => SetText(e.target.value)}
        value={text}
      ></input>
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default AddTask;
