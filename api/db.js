const { Pool } = require('pg');

const pool = new Pool({
  user: 'clint_user',
  host: 'localhost',
  database: 'clint_db',
  password: 'senha123',
  port: 5432,
});

const query = async (text, params) => {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
    client.release();
  }
};

module.exports = {
  pool,
  query
};