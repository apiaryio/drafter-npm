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
            classes: {
              element: 'array',
              content: [
                {
                  element: 'string',
                  content: 'warning'
                }
              ]
            },
          },
          attributes: {
            code: {
              element: 'number',
              content: 6
            },
            sourceMap: {
              element: 'array',
              content: [
                {
                  element: 'sourceMap',
                  content: [
                    {
                      element: 'array',
                      content: [
                        {
                          element: 'number',
                          attributes: {
                            line: {
                              element: 'number',
                              content: 1
                            },
                            column: {
                              element: 'number',
                              content: 1
                            }
                          },
                          content: 0
                        },
                        {
                          element: 'number',
                          attributes: {
                            line: {
                              element: 'number',
                              content: 1
                            },
                            column: {
                              element: 'number',
                              content: 8
                            }
                          },
                          content: 8
                        }
                      ]
                    }
                  ]
                }
              ]
            }
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
            classes: {
              element: 'array',
              content: [
                {
                  element: 'string',
                  content: 'error'
                }
              ]
            },
          },
          attributes: {
            code: {
              element: 'number',
              content: 4
            },
            sourceMap: {
              element: 'array',
              content: [
                {
                  element: 'sourceMap',
                  content: [
                    {
                      element: 'array',
                      content: [
                        {
                          element: 'number',
                          attributes: {
                            line: {
                              element: 'number',
                              content: 2
                            },
                            column: {
                              element: 'number',
                              content: 1
                            }
                          },
                          content: 18
                        },
                        {
                          element: 'number',
                          attributes: {
                            line: {
                              element: 'number',
                              content: 2
                            },
                            column: {
                              element: 'number',
                              content: 9
                            }
                          },
                          content: 9
                        }
                      ]
                    }
                  ]
                }
              ]
            }
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
