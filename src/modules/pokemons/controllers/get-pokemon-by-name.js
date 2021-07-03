import * as Media from '../use-cases';

const getPokemonsByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const pokemonData = await Media.getPokemonByName({ name });
    res.json(pokemonData);
  } catch (error) {
    next(error);
  }
};

export default getPokemonsByName;
