const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());


app.get('/tasks', async (req, res) => {
  try {
    let query = 'SELECT * FROM tasks';
    const values = [];
    let index = 1;

    const queryParams = Object.keys(req.query);
    if (queryParams.length > 0) {
      query += ' WHERE';

      queryParams.forEach(param => {
        query += ` ${param} = $${index} AND`;
        values.push(req.query[param]);
        index++;
      });
      query = query.slice(0, -4);
    }
    
    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
} catch (error) {
    console.error('Error trying to fetch data:', error);
    res.status(500).send('Error code 500');
  }
});

app.get('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1;', [id]);
    res.status(200).json(result.rows[0]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Task not found.' });
    }
    } catch (error) {
      console.error('Error trying to fetch data:', error);
      res.status(500).send('Error code 500');
    }
});

app.post('/tasks', async (req, res) => {
  const { title, due_date, status } = req.body;

  if (!title || !due_date || !status) {
    return res.status(400).json({ message: 'Need to fill in fields.' });
  }

  const insertQuery = 'INSERT INTO tasks (title, due_date, status) VALUES ($1, $2, $3) RETURNING *';
  try {
    const result = await pool.query(insertQuery, [title, due_date, status]);
    res.status(201).json(result.rows[0]);
} catch (error) {
    console.error('Error trying to fetch data:', error);
    res.status(500).send('Error code 500');
  }
});

app.put('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const { title, due_date, status } = req.body;

  if (!title || !due_date || !status) {
    return res.status(400).json({ message: 'Need to fill in fields.' });
  }

  const updateQuery = 'UPDATE tasks SET "title" = $2, due_date = $3, status = $4 \
    WHERE id = $1 RETURNING *';
  try {
    const result = await pool.query(updateQuery, [id, title, due_date, status]);

    if (result.rows.length === 0) {
      return res.status(404).json({ status: 200, message: 'Task not found.' });
    }
    res.status(204).json(result.rows[0]);

    } catch (error) {
      console.error('Error trying to fetch data:', error);
      res.status(500).send('Error code 500');
  }
});

app.delete('/tasks/:id', async (req, res) => {
  const id = req.params.id;

  const deleteQuery = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
  try {
    const result = await pool.query(deleteQuery, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Task not found.' });
    }
    res.status(200).json(result.rows[0]);
  
  } catch (error) {
      console.error('Error trying to fetch data:', error);
      res.status(500).send('Error code 500');
  }
});


app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});