const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, tasks: [...state.tasks, action.payload] };
      case "isDone" : 
     return { ...state, tasks: state.tasks.map(task => task.id === action.payload ?   
      {
        ...task,isDone : !task.isDone 
      }
      
      : task
      )  };
      case "delete" : 
      return {...state,tasks : state.tasks.filter(task => task.id !== action.payload   )  }
      case "update" : 
      return {...state,tasks : state.tasks.map(task => task.id === action.payload.id ?   
        {
          ...task, description : action.payload.text
        }
        
        : task
        )  };   
    
    default:
      return state;
  }
};
