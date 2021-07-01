import { Router } from 'express';

import getAllPokemons from './get-all-pokemons';
import getPokemonByNumber from './get-pokemon-by-number';
import togglePokemonOwnedByNumber from './toggle-owned-by-number';

const router = Router();

router.get('/all', getAllPokemons);
router.get('/:number', getPokemonByNumber);
router.put('/:number', togglePokemonOwnedByNumber);

export default router;
