import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from './actionTypes';

let newTaskId = 0;

export const addNewTask = (name) => {
  return {
    type: ADD_NEW_TASK,
    taskID: newTaskId++,
    taskName: name,
  }
};

export const toggleOneTask = (taskId) => {
  return {
    type: TOGGLE_ONE_TASK,
    taskId: taskId
  }
};