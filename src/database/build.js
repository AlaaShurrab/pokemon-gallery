import * as models from './models';
import buildData from './dummy-data';

// development data build
const build = async () => {
  await models.pokemonGallery.createTable();

  // build dummy data
  await buildData();
};

export default build;
