import React from 'react';
import { Modal } from 'react-bootstrap';
import TaskForm from './TaskForm';


const CreateTaskModal = ({ show, onHide, onCreateTask }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm onSubmit={onCreateTask}/>
      </Modal.Body>
    </Modal>
  );
};

export default CreateTaskModal;