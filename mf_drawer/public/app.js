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

window.addEventListener('load', updateFavoritesCount);
window.addEventListener('focus', updateFavoritesCount);
