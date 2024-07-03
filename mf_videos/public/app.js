async function searchVideos() {
  const query = document.getElementById('search-input').value;
  try {
    const response = await fetch('http://localhost:3000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query }),
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const videos = await response.json();
    displayResults(videos);
  } catch (error) {
    console.error('Erro na busca de vídeos:', error);
  }
}

function displayResults(videos) {
  const results = document.getElementById('results');
  results.innerHTML = ''; 
  videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.className = 'video';
    videoElement.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}">
      <h3>${video.title}</h3>
      <p>${video.description}</p>
      <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
      <div class="favorite" onclick="toggleFavorite('${video.id}')">☆</div>
    `;
    results.appendChild(videoElement);
  });
}

async function toggleFavorite(videoId) {
  try {
    const response = await fetch('http://localhost:3000/favorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ videoId }),
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    updateFavoritesCount();
  } catch (error) {
    console.error('Erro ao favoritar o vídeo:', error);
  }
}

async function updateFavoritesCount() {
  try {
    const response = await fetch('http://localhost:3000/favorites', { credentials: 'include' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    document.getElementById('favorites-count').innerText = `Favoritos: ${data.favorites.length}`;
  } catch (error) {
    console.error('Erro ao atualizar a contagem de favoritos:', error);
  }
}
