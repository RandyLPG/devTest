const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://www.bitmex.com/api/v1/announcement');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from BitMEX API:', error);
    res.status(500).send('Error fetching data from BitMEX API');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
