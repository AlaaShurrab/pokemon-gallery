import { query } from '../../../database';

const findPokemonByNumber = async ({ number }) => {
  const values = [number];
  const sql = `
  SELECT
    id,
    number,
    name,
    img,
    types,
    owned
  FROM pokemon_gallery
    WHERE number = $1
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

const findAllPokemons = async () => {
  const sql = `
    SELECT
      number,
      name,
      img,
      types,
      owned
    FROM pokemon_gallery
    `;

  const res = await query(sql);
  return res.rows;
};

// 0.06622516556 => 10/151
const findFiveRandomPokemons = async () => {
  const sql = `
    SELECT
      number,
      name,
      img,
      types,
      owned
    FROM pokemon_gallery
      WHERE random() < 0.06622516556 LIMIT 5
    `;

  const res = await query(sql);
  return res.rows;
};

const findPokemonByName = async ({ name }) => {
  const sql = `
    SELECT
      number,
      name,
      img,
      types,
      owned
    FROM 
      pokemon_gallery
    WHERE 
      name LIKE '%${name}%' LIMIT 10;
    `;

  const res = await query(sql);
  return res.rows;
};

export {
  findPokemonByNumber,
  findAllPokemons,
  findFiveRandomPokemons,
  findPokemonByName,
};
