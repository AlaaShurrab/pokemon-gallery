import Boom from '@hapi/boom';
import * as pokemons from '../models';
import { errorMsgs } from '../../../services/error-handler';

const getPokemonByName = async ({ name }) => {
  const pokemonData = await pokemons.findPokemonByName({ name });

  if (!pokemonData) {
    throw Boom.notFound(errorMsgs.NOT_FOUND);
  }
  return pokemonData;
};
export default getPokemonByName;
