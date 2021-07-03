import { Router } from 'express';

import getAllPokemons from './get-all-pokemons';
import getPokemonByNumber from './get-pokemon-by-number';
import togglePokemonOwnedByNumber from './toggle-owned-by-number';
import getRandomPokemons from './get-random-pokemons';
import getPokemonsByName from './get-pokemon-by-name';

const router = Router();

router.get('/all', getAllPokemons);
router.get('/random', getRandomPokemons);
router.get('/find/:name', getPokemonsByName);
router.get('/:number', getPokemonByNumber);
router.put('/:number', togglePokemonOwnedByNumber);

export default router;
