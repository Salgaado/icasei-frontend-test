let favorites = [];
async function searchVideos() {
  const query = document.getElementById('search-input').value;
  if (!query) return;
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
      <div class="favorite" onclick="toggleFavorite({
        'id': '${video.id}',
        'title': '${video.title}',
        'description': '${video.description}',
        'thumbnail': '${video.thumbnail}'
      })">☆</div>
    `;
    results.appendChild(videoElement);
  });
}

async function toggleFavorite(videoData) {
  try {
    window.parent.postMessage({videoData: videoData, type: 'toggleFavorite'}, '*');
  } catch (error) {
    console.error('Erro ao favoritar o vídeo:', error);
  }
}

window.addEventListener('message', (event) => {
  const parentPath = event.data.currentPath;
  if (event.data.type == 'favorites') favorites = event.data.favorites;

  if (parentPath === '/videos')
    searchVideos();

  if (parentPath === '/favorites')
    displayResults(favorites);
});
