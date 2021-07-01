import * as Media from '../use-cases';

const getPokemonByNumber = async (req, res, next) => {
  const { number } = req.params;
  console.log('hello******************************');
  try {
    const pokemonData = await Media.getPokemonByNumber({ number });
    res.json(pokemonData);
  } catch (error) {
    next(error);
  }
};

export default getPokemonByNumber;
