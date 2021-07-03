import Boom from '@hapi/boom';
import * as pokemons from '../models';
import { errorMsgs } from '../../../services/error-handler';

const getPokemonByNumber = async ({ number }) => {
  const pokemonData = await pokemons.findPokemonByNumber({ number });

  if (!pokemonData) {
    throw Boom.notFound(errorMsgs.NOT_FOUND);
  }
  return pokemonData;
};
export default getPokemonByNumber;
