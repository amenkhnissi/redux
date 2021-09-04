import React ,{useState} from "react";
import { useDispatch } from "react-redux";
import { DeleteTask, IsDone, UpdateTask } from "../actions/action";

const Task = ({ task  }) => {

  const [text, SetText] = useState("");
  const [isVisible, SetisVisible] = useState(false);
  const dispatch = useDispatch()
  const color = task.isDone === true ?  "green"  : 'white' 

  const handleClick = () => {
   
      dispatch(IsDone(task.id));
      
      
    }
   
    const handleDelete =() =>{
      dispatch(DeleteTask(task.id))
    }

    const handleUpdate =() => {
      dispatch(UpdateTask(task.id , text))
      SetisVisible(!isVisible)
      SetText('')


    }
  return (
    <>
    <div className="task" 
    style={{background: color} }
    >  <div style={{cursor: "pointer"}} onClick={handleClick} >
         <h2>{task.description}</h2>

    </div>
      <div>
        <span style={{cursor: "pointer"}} onClick={() => SetisVisible(!isVisible)
} >
      <i class='bx bxs-comment-add bx-md'></i>
        </span>
        <span style={{cursor: "pointer"}} onClick={handleDelete} >
        <i class='bx bx-trash bx-md '  ></i>
        </span>
     
      </div>
     
    </div>
    {isVisible &&    (
      <div className="update-task"  >
      <input  type="text" onChange={(e)=> SetText(e.target.value)  } value={text} ></input>
      <button onClick={handleUpdate}  >Update Task</button>
    </div>

    ) }
    
    </>
  );
};

export default Task;
