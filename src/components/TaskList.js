import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask.js";
import FiltredTasks from "./FiltredTasks.js";
import Task from "./Task.js";

const TaskList = () => {
  const [isDone ,SetisDone] = useState(false)
  const [isVisible, SetisVisible] = useState(false);
  const tasks = useSelector((state) => state.tasks);
 

 

    return <>
    <div className="btn-filter">
    <button className="btn" onClick={() => { SetisDone(true) ; SetisVisible(!isVisible)  }  }  >IsDone</button>
    <button className="btn" onClick={() => { SetisDone(false) ; SetisVisible(!isVisible)  }  }  >IsNot</button>
    </div>
    
   
    {  !isVisible ? <> 
      <div className="task-list">
    <h1>Tasks List</h1>
    <AddTask />
    {tasks.length > 0 && tasks.map((task, k) => <Task key={k} task={task} id={k} />)}  </div> </>
    : <FiltredTasks tasks={tasks} isDone={isDone} /> }
    
 

</>
  
     
   
    
  
};

export default TaskList;
