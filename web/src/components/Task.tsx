import React, { useContext, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDrag } from 'react-dnd';
import { TaskContext } from '../context/TaskContext';
import { useDispatch } from 'react-redux';
import { taskSlice } from '../redux/task/taskSlice';
import { selectedTask } from '../redux/task/taskSlice';


interface ITask {
  id?: number,
  title: string,
  due_date: string,
  status: string 
}

const Task = ({ task, index, onMoveTask }) => {
  // const { setSelectedTask: ITask } = useContext(TaskContext);
  const dispatch = useDispatch()

  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div style={{ borderRadius: '30px', opacity: isDragging ? 0.5 : 1 }}>
      <ListGroup.Item 
        ref={drag}
        onClick={()=> dispatch(selectedTask(task))} >
        {task.title}
      </ListGroup.Item>
    </div>
  )
}

export default Task
