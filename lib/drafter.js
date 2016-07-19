try {
  var protagonist = require('protagonist')

  module.exports = {
    parse: protagonist.parse,
    parseSync: protagonist.parseSync,
  };
} catch (error) {
  var drafterjs = require('drafter.js')

  module.exports = {
    parse: drafterjs.parse,
    parseSync: drafterjs.parseSync,
  };
}
