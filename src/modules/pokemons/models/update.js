import { query } from '../../../database';

const updatePokemonOwnedByNumber = async ({ number }) => {
  const values = [number];

  const sql = `
    UPDATE pokemon_gallery 
    SET 
    owned = NOT owned 
    WHERE id = $1
    RETURNING *
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

export { updatePokemonOwnedByNumber };
