var expect = require('chai').expect;
var drafter = require('../lib/drafter.js');

describe('Parsing an API Blueprint', function() {
  var blueprint = '# API Blueprint\n';
  var parseResult = {
    element: 'parseResult',
    content: [
      {
        element: 'category',
        meta: {
          classes: ['api'],
          title: 'API Blueprint',
        },
        content: [],
      }
    ]
  }

  it('should parse an API Blueprint asynchronously', function(done) {
    drafter.parse(blueprint, {}, function(error, result) {
      expect(error).to.be.null;
      expect(result).to.deep.equal(parseResult);
      done();
    });
  });

  it('should parse an API Blueprint synchronously', function() {
    var blueprint = '# API Blueprint';

    var result = drafter.parseSync(blueprint, {});
    expect(result).to.deep.equal(parseResult);
  });
});
