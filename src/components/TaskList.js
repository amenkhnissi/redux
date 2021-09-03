import React from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask.js";
import Task from "./Task.js";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-list">
      <h1>Tasks List</h1>
      <AddTask />
      {tasks.length > 0 && tasks.map((task, k) => <Task key={k} task={task} />)}
    </div>
  );
};

export default TaskList;
