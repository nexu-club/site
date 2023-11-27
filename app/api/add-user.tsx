import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const unicod = request.query.unicod as string;
    const email = request.query.email as string;
    const timestamp = new Date();
    const ptime = timestamp.getTime();
    if (!unicod || !email) throw new Error('Sólo te solicitamos tu Código UNI y Correo Electrónico. No es para tanto.');
    await sql`INSERT INTO metausers (unicod, email) VALUES (${unicod}, ${email}, ${ptime});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const pets = await sql`SELECT * FROM Pets;`;
  return response.status(200).json({ pets });
}