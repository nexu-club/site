import { Pool } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';

require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Destructure directly from request body
  const { unicode, email} = req.body;

  try {
    const client = await pool.connect();

    // Use parameterized queries to prevent SQL injection
    const query = `INSERT INTO metausers (unicode, email) VALUES ($1, $2)`;
    const values = [unicode, email];

    await client.query(query, values);

    client.release();

    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default handler;

