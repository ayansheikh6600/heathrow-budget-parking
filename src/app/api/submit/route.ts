import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const SPREADSHEET_ID = '1-HiuVw5OGBJgg-dHyr76tmuZ5cpzXHFA0PKqzxuSnIA';
const SHEET_NAME = 'Sheet2';
const API_KEY = 'eb78fd6ee5d7f760ebef0db0b34ded3ff38fb04d';

async function saveFormData(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    try {
      const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}:append?valueInputOption=USER_ENTERED&key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [[name, email, message]]
        }),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Form data saved successfully!' });
      } else {
        res.status(500).json({ error: 'Error saving form data' });
      }
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Error saving form data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export default saveFormData;
