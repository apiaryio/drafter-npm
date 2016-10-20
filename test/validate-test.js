var expect = require('chai').expect;
var drafter = require('../lib/drafter.js');

describe('Validating an API Blueprint', function() {
  context('with a valid API Blueprint', function() {
    var blueprint = '# API Blueprint\n';

    it('should validate asynchronously', function(done) {
      drafter.validate(blueprint, {}, function(error, result) {
        expect(error).to.be.null;
        expect(result).to.be.null;
        done();
      });
    });

    it('should validate an API Blueprint synchronously', function() {
      var result = drafter.validateSync(blueprint, {});
      expect(result).to.be.null;
    });
  });

  context('with an API Blueprint that has a warning', function() {
    var blueprint = '# GET /\n';
    var parseResult = {
      element: 'parseResult',
      content: [
        {
          element: 'annotation',
          meta: {
            classes: ['warning'],
          },
          attributes: {
            code: 6,
            sourceMap: [
              {
                element: 'sourceMap',
                content: [
                  [ 0, 8 ]
                ]
              }
            ]
          },
          content: "action is missing a response",
        }
      ]
    }

    it('should validate asynchronously', function(done) {
      drafter.validate(blueprint, {}, function(error, result) {
        expect(error).to.be.null;
        expect(result).to.deep.equal(parseResult);
        done();
      });
    });

    it('should validate an API Blueprint synchronously', function() {
      var result = drafter.validateSync(blueprint, {});
      expect(result).to.deep.equal(parseResult);
    });
  });

  context('with an API Blueprint that has an error', function() {
    var blueprint = '# Data Structures\n## A (A)\n';
    var parseResult = {
      element: 'parseResult',
      content: [
        {
          element: 'annotation',
          meta: {
            classes: ['error'],
          },
          attributes: {
            code: 4,
            sourceMap: [
              {
                element: 'sourceMap',
                content: [
                  [ 18, 9 ]
                ]
              }
            ]
          },
          content: "base type 'A' circularly referencing itself",
        }
      ]
    }

    it('should validate asynchronously', function(done) {
      drafter.validate(blueprint, {}, function(error, result) {
        expect(error).to.be.null;
        expect(result).to.deep.equal(parseResult);
        done();
      });
    });

    it('should validate an API Blueprint synchronously', function() {
      var result = drafter.validateSync(blueprint, {});
      expect(result).to.deep.equal(parseResult);
    });
  });
});
