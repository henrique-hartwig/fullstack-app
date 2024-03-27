import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import { useDrop } from 'react-dnd';
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
      <Col ref={drop} style={{ background: isOver ? '#b2cef3' : 'transparent' }}>
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