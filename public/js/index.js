/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

(async () => {
  try {
    const { data } = await getRandomPokemonFetch();
    cardList(data);
  } catch (error) {
    setErrorMsg(error);
  }
})();

const cardContainer = document.querySelector('.inner-card-container');
const searchInput = document.querySelector('#search');
const searchForm = document.querySelector('.search-form');
const title = document.querySelector('.main > h3');

searchForm.onsubmit = (e) => {
  e.preventDefault();
  return false;
};

searchInput.addEventListener('keyup', async (event) => {
  const keyCodeInput = String.fromCharCode(event.keyCode);
  if (
    /[a-zA-Z0-9-_ ]/.test(keyCodeInput) ||
    event.keyCode === 8 ||
    event.keyCode === 46 ||
    event.keyCode === 13
  ) {
    const inputValue = event.target.value.trim().toLowerCase();
    try {
      const { data } = await formResultFetch(inputValue);

      title.textContent = !inputValue
        ? 'Gallery'
        : `Search result on: ${inputValue}`;
      cardList(data);
    } catch (error) {
      setErrorMsg(error);
    }
  }
});
