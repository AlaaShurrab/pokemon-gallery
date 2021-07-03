import dotenv from 'dotenv';
import createPokemons from './pokemons';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.pokemons = await createPokemons();
};

export default buildData;
