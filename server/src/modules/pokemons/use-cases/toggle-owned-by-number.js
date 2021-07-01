import Boom from '@hapi/boom';
import * as pokemons from '../models';
import { errorMsgs } from '../../../services/error-handler';

const toggleOwnedByNumber = async ({ number }) => {
  const pokemonData = await pokemons.findPokemonByNumber({ number });

  if (!pokemonData) {
    throw Boom.notFound(errorMsgs.NOT_FOUND);
  }

  const data = await pokemons.updatePokemonOwnedByNumber({ number });

  return data;
};
export default toggleOwnedByNumber;
