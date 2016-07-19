![logo](https://raw.github.com/apiaryio/api-blueprint/master/assets/logo_apiblueprint.png)

# Drafter NPM Package [![Build Status](https://travis-ci.org/apiaryio/drafter-npm.svg?branch=master)](https://travis-ci.org/apiaryio/drafter-npm)

The Drafter NPM package is an API Blueprint parser for Node. This package is a
wrapper around the underlying C++ parser
[Drafter](https://github.com/apiaryio/drafter). Drafter NPM optionally depends
on the C++ binding to Drafter
[Protagonist](https://github.com/apiaryio/protagonist). If for any reason
Protagonist is not installable, this package will fallback to using the slower,
pure JavaScript version of Drafter,
[drafter.js](https://github.com/apiaryio/drafter.js).

## Installation

Drafter can be installed from NPM. If you want to use Drafter from a web
browser, check out [drafter.js](https://github.com/apiaryio/drafter.js).

```shell
$ npm install drafter
```

## Usage

```js
var drafter = require('drafter');
```

Once you've included drafter, you can parse an API Blueprint asynchronously:

```js
var options = {
  generateSourcemap: true,
};

drafter.parse('# API Blueprint...', options, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
```

Alternatively, you can use Drafter synchronously:

```js
try {
  var result = drafter.parse('# API Blueprint...', options);
  console.log(result);
} catch (err) {
  console.log(err);
}
```

### Parsing Options

Options can be passed to the parser as an optional second argument to both the
asynchronous and synchronous interfaces:

```js
var options = {
  generateSourceMap: true
}

drafter.parse('# My API', options, callback);
```

The available options are:

Name                   | Description
---------------------- | ----------------------------------------------------------
`requireBlueprintName` | Require parsed blueprints have a title (default: false)
`generateSourceMap`    | Enable sourcemap generation (default: false)
`type`                 | Set the output structure type as either `ast` or `refract` (default: `refract`)

**NOTE**: *The `ast` option is deprecated in favour of `refract`.*

## License

MIT License. See the [LICENSE](LICENSE) file.
