const express = require('express');
const session = require('express-session');
const axios = require('axios');
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
    console.log(req.body)
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${process.env.YOUTUBE_API_KEY}`);
    return res.json(req.body);
  } catch (error) {
    return res.status(error.response.status).json({ message: error.response.data.error.message });
  }
});

app.post('/favorite', (req, res) => {
  const { videoId } = req.body;
  const favorites = req.session.favorites || [];
  if (favorites.includes(videoId)) {
    req.session.favorites = favorites.filter(id => id !== videoId);
  } else {
    req.session.favorites = [...favorites, videoId];
  }
  return res.json({ favorites: req.session.favorites });
});

app.get('/favorites', (req, res) => {
  return res.json({ favorites: req.session.favorites || [] });
});

app.listen(3000, () => {
  console.log('BFF ouvindo na porta 3000');
});