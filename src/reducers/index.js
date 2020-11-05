const initialState = [
  {
    id: 1,
    title: "tit",
    description: "123555555555555555555",
    status: "unstarted",
  },
  {
    id: 2,
    title: "tit2",
    description: "123",
    status: "in progress",
  },
  {
    id: 3,
    title: "tit2333",
    description: "123",
    status: "completed",
  },
];

const tasks = (state = {tasks: initialState}, action) => {
  return state
}

export default tasks;