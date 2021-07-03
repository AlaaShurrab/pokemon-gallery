import * as Pokemons from '../use-cases';

const getRandomPokemons = async (req, res, next) => {
  try {
    const pokemon = await Pokemons.getRandomPokemon();
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
};

export default getRandomPokemons;
