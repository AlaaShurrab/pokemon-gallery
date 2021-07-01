import * as Pokemons from '../use-cases';

const getAllPokemons = async (req, res, next) => {
  try {
    const pokemon = await Pokemons.getAllPokemon();
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
};

export default getAllPokemons;
