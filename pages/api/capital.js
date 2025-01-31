import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { country } = req.query;
  if (!country) {
    return res.status(400).json({ message: 'Country parameter is required' });
  }

  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('capitals').findOne({ 
      country: country 
    });

    if (!result) {
      return res.status(404).json({ message: 'Country not found' });
    }

    res.status(200).json({ capital: result.capital });
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ message: 'Error connecting to database' });
  }
}
