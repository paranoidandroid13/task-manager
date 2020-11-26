import { EDIT_TASK } from"../actions/types";
import { CREATE_TASK } from '../actions/types'
import { DELETE_TASK } from '../actions/types'

const initialState = [

];

const tasks = (state = {tasks: initialState}, action) => {

  if (action.type === EDIT_TASK) {
    const {payload} = action
    return {
      tasks: state.tasks.map(task => {
        if (task.id === payload.id) {
          return Object.assign({}, task, payload.params)
        }
        return task
      })
    }
  }
  if (action.type === CREATE_TASK) {
    return {
      tasks: state.tasks.concat(action.payload),
    }
  }

  if (action.type === DELETE_TASK) {
    return {
      tasks: state.tasks.filter((task) => task.id !== action.id)
    }
  }

  return state;


}

export default tasks;