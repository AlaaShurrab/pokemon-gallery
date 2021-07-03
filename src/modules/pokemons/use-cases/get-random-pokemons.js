import * as pokemons from '../models';

const getRandomPokemon = async () => pokemons.findFiveRandomPokemons();
export default getRandomPokemon;
