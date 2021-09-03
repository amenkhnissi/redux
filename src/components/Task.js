import React from "react";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h2>{task.description}</h2>
    </div>
  );
};

export default Task;
