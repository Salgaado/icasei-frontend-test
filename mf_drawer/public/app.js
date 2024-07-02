async function updateFavoritesCount() {
  const response = await fetch('http://localhost:3000/favorites');
  const data = await response.json();
  document.getElementById('favorites-count').innerText = `Favoritos: ${data.favorites.length}`;
}

window.addEventListener('load', updateFavoritesCount);
window.addEventListener('focus', updateFavoritesCount);
