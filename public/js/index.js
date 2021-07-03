/* eslint-disable no-undef */
const cardContainer = document.querySelector('.inner-card-container');
const searchInput = document.querySelector('#search');

const cardList = (arr) => {
  arr.forEach((obj) => {
    cardContainer.appendChild(createCard(obj));
  });
};

searchInput.addEventListener('change', async function a() {
  try {
    const { data } = await axios.get(`/api/pokemons/find/${this.value}`);
    clear(cardContainer);
    cardList(data);
  } catch (error) {
    console.log(error);
  }
});

(async () => {
  try {
    const { data } = await axios.get('/api/pokemons/random');
    cardList(data);
  } catch (error) {
    console.log(error);
  }
})();
