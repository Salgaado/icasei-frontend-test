async function searchVideos() {
  const query = document.getElementById('search-input').value;
  const response = await fetch('http://localhost:3000/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });
  const videos = await response.json();
  displayResults(videos);
}

function displayResults(videos) {
  const results = document.getElementById('results');
  results.innerHTML = '';
  videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.className = 'video';
    videoElement.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      <div class="favorite" onclick="toggleFavorite('${video.id.videoId}')">☆</div>
    `;
    results.appendChild(videoElement);
  });
}

async function toggleFavorite(videoId) {
  await fetch('http://localhost:3000/favorite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ videoId })
  });
}
