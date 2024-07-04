let favorites = [];

async function updateFavoritesCount(favoritesParam) {
  try {
    document.getElementById('favorites-count').innerText = `${favoritesParam ? favoritesParam.length : 0}`;
  } catch (error) {
    console.error('Erro ao atualizar a contagem de favoritos:', error);
  }
}

window.addEventListener('message', (event) => {
  if (event.data.type == 'favorites') favorites = event.data.favorites;

  updateFavoritesCount(favorites);
});

(() => {
  updateFavoritesCount(favorites);
})()
