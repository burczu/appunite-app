const path = require('path');

const prepareAliases = (paths) => {
  const alias = {};

  Object.keys(paths).forEach((key) => {
    alias[key] = path.resolve(__dirname, '../../', paths[key]);
  });

  return alias;
};

module.exports = {
  prepareAliases,
};
