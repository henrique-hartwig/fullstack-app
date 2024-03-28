import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';
import { TaskContext } from '../context/TaskContext';

const DragAndDrop = ({ tasks, setTasks }) => {

  const updateTask = async (task, newStatus) => {
    const url = `http://localhost:3001/tasks/${task.id}`;
    const newTask = {
        id: Number(task.id),
        title: task.title,
        due_date: task.due_date,
        status: newStatus
    }
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      });
  
      if (response.status !== 204) {
        console.error('Some error has occur. Status: ', response.status)
      }
    }
    const moveTask = async (taskId, newStatus) => {
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
            updateTask(task, newStatus);
          return { ...task, status: newStatus };
        }
        return task;

      });
      setTasks(updatedTasks);
    };
    
    const { setSelectedTask } = useContext(TaskContext);

    return (
      <DndProvider backend={HTML5Backend}>
        <Container>
          <Row>
            <Column 
                title="To Do" 
                tasks={tasks.filter(task => task.status === 'To Do')} 
                onMoveTask={moveTask} 
                onClick={(e) => setSelectedTask(e.target.value)} />
            <Column 
                title="Doing"
                tasks={tasks.filter(task => task.status === 'Doing')}
                onMoveTask={moveTask} />
            <Column 
                title="Ready"
                tasks={tasks.filter(task => task.status === 'Ready')}
                onMoveTask={moveTask} />
          </Row>
        </Container>
      </DndProvider>
    );
  };
  
  export default DragAndDrop;