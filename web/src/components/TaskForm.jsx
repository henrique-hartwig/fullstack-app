import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TaskForm = ({ task, onSubmit }) => {
  const dateFormatter = (date) => {
    return new Date(date).toISOString().split('T')[0]
  }

  const [title, setTitle] = useState(task? task.title : '');
  const [dueDate, setDueDate] = useState(task? dateFormatter(task.due_date) : '');
  const [status, setStatus] = useState(task? task.status : 'To Do');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = {
        title,
        due_date: dueDate,
        status
    }

    const success = await onSubmit(task);
    if (success) {
      setTitle('');
      setStatus('');
      setDueDate('');
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        </Form.Group>

        <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
                <Form.Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                    >
                    <option value="To Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Ready">Ready</option>
            </Form.Select>
        </Form.Group>

        <Form.Group controlId="dueDate">
            <Form.Label>Due date</Form.Label>
            <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
        </Form.Group>
        <Button variant="primary" type="submit">
        Save
        </Button>
    </Form>

  );
};

export default TaskForm;