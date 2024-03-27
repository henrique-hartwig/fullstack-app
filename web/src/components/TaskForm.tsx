import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ITask } from './ITask'


interface TaskFormProps {
  task: ITask;
  onSubmit: (task: ITask) => Promise<ITask>;
}

const TaskForm:  React.FC<TaskFormProps> = ({ task, onSubmit }) => {
  const dateFormatter = (date: string): string => {
    return new Date(date).toISOString().split('T')[0]
  }

  const [title, setTitle] = useState(task? task.title : '');
  const [dueDate, setDueDate] = useState(task? dateFormatter(task.due_date) : '');
  const [status, setStatus] = useState(task? task.status : 'To Do');

  const handleSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();
    const task: ITask = {
        title,
        due_date: dueDate,
        status
    };

    async () => {
      try {
        const success: Promise<ITask> = await onSubmit(task);
        if (success) {
          setTitle('');
          setStatus('');
          setDueDate('');
        }
      }
      catch {
        console.error(error)
      }
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