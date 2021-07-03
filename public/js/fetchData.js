/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const toggleCapturedFetch = (id) => axios.put(`/api/pokemons/${id}`);

const getRandomPokemonFetch = () => axios.get('/api/pokemons/random');

const formResultFetch = (inputValue) =>
  axios.get(
    !inputValue ? '/api/pokemons/random' : `/api/pokemons/find/${inputValue}`
  );
