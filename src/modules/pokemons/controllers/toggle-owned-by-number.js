import * as Media from '../use-cases';

const togglePokemonOwnedByNumber = async (req, res, next) => {
  const { number } = req.params;
  try {
    const pokemonData = await Media.toggleOwnedByNumber({ number });
    res.json(pokemonData);
  } catch (error) {
    next(error);
  }
};

export default togglePokemonOwnedByNumber;
