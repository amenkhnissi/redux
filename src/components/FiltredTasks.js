import React from 'react'
import Task from './Task'

const FiltredTasks = ({tasks , isDone}) => {
 
    return (
        <>
       
        <div className="filtred-list">
        <h1>Filtred Tasks</h1>
           
            {tasks.length > 0 && tasks.filter(task =>  task.isDone === isDone   ).map((task, k) => <Task key={k} task={task} id={k} />)}
            
        </div>
        </>
    )
}

export default FiltredTasks
