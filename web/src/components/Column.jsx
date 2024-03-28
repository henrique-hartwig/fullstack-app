import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import { useDrop } from 'react-dnd';
import './Column.css';
import Task from './Task';

const Column = ({ title, tasks, onMoveTask }) => {
    const [{ isOver }, drop] = useDrop({
      accept: 'TASK',
      drop: (item) => {
        onMoveTask(item.id, title);
      },
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      }),
    });
  
    return (
      <Col ref={drop} className={isOver? 'is-over' : 'is-not-over'}>
        <h3>{title}</h3>
        <ListGroup>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} onMoveTask={onMoveTask} />
          ))}
        </ListGroup>
      </Col>
    );
  };

export default Column;