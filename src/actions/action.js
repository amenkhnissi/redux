

export const add = (newTask) => ({
  type: "add",
  payload: newTask,
});

export const IsDone  = (id) =>( {
  type : "isDone",
  payload : id

})

export const DeleteTask = (id) =>( {
  type : "delete",
  payload : id
})

export const UpdateTask = (id , text) => (
  {
    type : "update",
    payload: {
      id,
      text
    }
  }
)