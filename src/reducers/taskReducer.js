const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, tasks: [...state.tasks, action.payload] };

    default:
      return state;
  }
};
