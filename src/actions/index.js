import { EDIT_TASK } from "./types"
import { CREATE_TASK } from './types'
import { DELETE_TASK } from './types'

const shortid = require('shortid')

export const editTask = (id, params = {}) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      params
    }
  }
}

export const createTask = ({ title, description }) => {
  return {
    type: CREATE_TASK,
    payload: {
      id: shortid.generate(),
      title,
      description,
      status: 'unstarted',
    }

  };
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id,

  };
}