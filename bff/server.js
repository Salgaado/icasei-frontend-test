const express = require('express');
const session = require('express-session');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],  // Permitir requisições do mf_drawer
  credentials: true
}));

app.use(session({
  secret: 'sua_chave_secreta_gerada_aqui',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Servidor BFF está funcionando');
});

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

    const videos = response.data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url
    }));

    res.json(videos);
  } catch (error) {
    res.status(error.response.status).json({ message: error.response.data.error.message });
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
  res.json({ favorites: req.session.favorites });
});

app.get('/favorites', (req, res) => {
  res.json({ favorites: req.session.favorites || [] });
});

app.listen(3000, () => {
  console.log('BFF ouvindo na porta 3000');
});
