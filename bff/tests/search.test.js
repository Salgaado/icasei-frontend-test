const axios = require('axios');
const express = require('express');
const session = require('express-session');
const supertest = require('supertest');

const app = express();

app.use(session({
  secret: 'sua_chave_secreta',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());

app.post('/search', async (req, res) => {
  const { query } = req.body;
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        key: process.env.YOUTUBE_API_KEY
      }
    });
    res.json(response.data.items);
  } catch (error) {
    res.status(error.response.status).json({ message: error.response.data.error.message });
  }
});

const request = supertest(app);

test('should search videos on YouTube', async () => {
  const response = await request.post('/search').send({ query: 'Node.js' });
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThan(0);
}, 10000); // Aumentando o tempo limite para 10000 ms
