import './Task.css';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDrag } from 'react-dnd';
import { TaskContext } from '../context/TaskContext';


const Task = ({ task, index, onMoveTask }) => {
  const { setSelectedTask } = useContext(TaskContext);
  
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className={isDragging ? "item dragging" : "item my-1 not-dragging"}>
      <ListGroup.Item 
        ref={drag}
        onClick={()=> setSelectedTask(task)} 
        >
        {task.title}
      </ListGroup.Item>
    </div>
  );
};
export default Task;
