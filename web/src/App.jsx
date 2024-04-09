import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CreateTaskModal from './components/CreateTaskModal';
import DragAndDrop from './components/DragAndDrop';
import TaskModal from './components/TaskModal';

import {TaskContext} from './context/TaskContext';

function App() {
  const url = 'http://localhost:4000/tasks';

  const [ tasks, setTasks ] = useState([]);
  const [ filteredTasks, setFilteredTasks ] = useState([]);

  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  
  const [showTaskModal, setShowTaskModal] = useState(false);
  const { selectedTask } = useContext(TaskContext);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setTasks(data);
      setFilteredTasks(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setShowTaskModal(true);
  }, [selectedTask]);

  const filterTasks = (tasks, filter) => {
    return tasks.filter(task => 
      task.title.toLowerCase().includes(filter.toLowerCase())
    )
  }

  const handleSearchChange = (e) => {
    if (e.target.value !== '') {
      setFilteredTasks(filterTasks(tasks,e.target.value));
    }
    else {
      setFilteredTasks(tasks);
    }
  };

  const handleDeleteTask = async (id) => {
    const url = `http://localhost:4000/tasks/${id}`;

    const res = await fetch(url, {
      method: 'DELETE'
    });
      const data = await res.json();

    if (data.id === id) {
      removeTask(id);
    }
  }

  const removeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    setFilteredTasks(newTasks);
    setShowTaskModal(false);
  };

  const handleCreateTask = async (task) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      
      if (response.status === 201) {
        setTasks([...tasks, task])
        setFilteredTasks([...tasks, task])
        return true;
      }
    } catch (error) {
      console.error('Error trying to create new task. Message:', error);
    }
    return false;
  }

  const handleUpdateTask = async (task) => {
    const url = `http://localhost:4000/tasks/${selectedTask.id}`;
    
    const updatedTask = {
      ...task,
      id: Number(selectedTask.id),
    }

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      });
      
      if (response.status === 204) {
        const newTasks = tasks.map(task => {
          if (task.id === selectedTask.id) {
            return updatedTask
          }
          return task
        })
        setTasks(newTasks)
        setFilteredTasks(newTasks)
        return true;
      }
    } catch (error) {
        console.error('Error trying to create new task. Message:', error);
    }
    return false;
  }

  return (
    <div className="App">
      <header className="App-header">
        Kanban Tasks Manager
      </header>

      <div>
        <div className='container my-2 filter-and-create-task'>
          <Form className="mb-3 form-create" onSubmit={(e) => e.preventDefault()}>
            <FormControl
              type="text"
              placeholder="Search task..."
              onChange={handleSearchChange}
            />
          </Form>

          <Button 
            type="primary" 
            className='button-create'
            onClick={() => setShowCreateTaskModal(true)}>
            + New Task
          </Button> 
        </div>

        <CreateTaskModal
          show={showCreateTaskModal}
          onHide={() => setShowCreateTaskModal(false)}
          onCreateTask={handleCreateTask}/>
        
        {selectedTask && <TaskModal
          show={showTaskModal}
          task={selectedTask}
          onHide={()=>{setShowTaskModal(false)}}
          onUpdate={(e) => handleUpdateTask(e)}
          onDelete={() => handleDeleteTask(selectedTask.id)}
          />}
      </div>

      <DragAndDrop tasks={filteredTasks} setTasks={setFilteredTasks}/>
    </div>
  );
}

export default App;
