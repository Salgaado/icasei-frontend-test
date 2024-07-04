const FAVORITE_STORAGE_KEY = 'mfFavoritesVideos';

const mfDrawerIframe = document.getElementById("mfDrawer");
const mfVideosIframe = document.getElementById("mfVideos");

function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem(FAVORITE_STORAGE_KEY) || "[]");
  return favorites;
}

function setFavorites(favorites) {
  localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(favorites));
}

function addFavorites(videoData) {
  const favorites = getFavorites();

  favorites.push(videoData);
  setFavorites(favorites);
}

function removeFavorites(videoData) {
  let favorites = getFavorites();

  favorites = favorites.filter(favorite => favorite.id != videoData.id);

  setFavorites(favorites);
}

function sendFavoritesToIframes() {
  const currentPath = window.location.pathname;
  const payload = { type: 'favorites', favorites: getFavorites(), currentPath };
  mfDrawerIframe.contentWindow.postMessage(payload, '*');
  mfVideosIframe.contentWindow.postMessage(payload, '*');
}

function sendCurrentPath() {
  const currentPath = window.location.pathname;
  const payload = { type: 'path', currentPath };
  console.log(payload);
  mfDrawerIframe.contentWindow.postMessage(payload, '*');
  mfVideosIframe.contentWindow.postMessage(payload, '*');
}

async function toggleFavorite(videoData) {
  try {
    const favorites = getFavorites();

    if (favorites.map(favorite => favorite.id).includes(videoData.id))
      removeFavorites(videoData);
    else
      addFavorites(videoData);

    sendFavoritesToIframes();
  } catch (error) {
    console.error('Erro ao favoritar o vídeo:', error);
  }
}

window.addEventListener('message', (event) => {
  if (event.data.type == 'toggleFavorite') toggleFavorite(event.data.videoData);
});


(() => {
  setTimeout(() => {
    sendFavoritesToIframes();
  }, 1000);
})()

