import { combineReducers } from 'redux';
import { taskSlice } from './task/taskSlice';


export default combineReducers({
  task: taskSlice
})