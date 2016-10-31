try {
  var protagonist = require('protagonist');

  module.exports = {
    parse: protagonist.parse,
    parseSync: protagonist.parseSync,

    validate: protagonist.validate,
    validateSync: protagonist.validateSync,
  };
} catch (error) {
  var drafterjs = require('drafter.js');

  module.exports = {
    parse: drafterjs.parse,
    parseSync: drafterjs.parseSync,

    validate: drafterjs.validate,
    validateSync: drafterjs.validateSync,
  };
}
