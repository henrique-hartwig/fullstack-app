import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import TaskForm from './TaskForm';


const TaskModal = ({ show, task, onHide, onDelete, onUpdate }) => {

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Task Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm task={task} onSubmit={onUpdate}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;