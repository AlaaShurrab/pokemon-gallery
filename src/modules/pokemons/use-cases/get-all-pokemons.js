import * as pokemons from '../models';

const getAllPokemon = async () => pokemons.findAllPokemons();
export default getAllPokemon;
