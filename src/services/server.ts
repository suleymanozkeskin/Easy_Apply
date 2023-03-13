import express from 'express';
import pool from '../database/db';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const app = express();

// Example endpoint to test database connection
app.get('/test', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    res.send(result.rows[0]);
    client.release();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to database');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
