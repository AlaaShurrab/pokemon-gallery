import axios from 'axios';
import Debug from 'debug';
import { query } from '../connect';

const debug = Debug('server');

const createPokemon = async ({ number, name, img, types }) => {
  const sql = `INSERT INTO pokemon_gallery(
    number,
    name,
    img,
    types
  ) VALUES (
    $1,
    $2,
    $3,
    $4
    ) RETURNING *`;
  const res = await query(sql, [number, name, img, types]);
  debug(res.rows[0].name);
  return res.rows[0];
};

const createPokemons = async () => {
  const dataRange = [...Array(150).keys()];
  dataRange.shift();
  // eslint-disable-next-line no-restricted-syntax
  for await (const num of dataRange) {
    try {
      const temp = {};
      const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${num}`);
      temp.number = num;
      temp.name = data.forms[0].name;
      temp.types = data.types.map((type) => type.type.name).join(', ');
      temp.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg`;
      await createPokemon(temp);
    } catch (error) {
      debug(`error: ${error}`);
    }
  }
};

export default createPokemons;
