# origin(al)

[![Version npm](https://img.shields.io/npm/v/original.svg?style=flat-square)](https://www.npmjs.com/package/original)[![Build Status](https://img.shields.io/github/workflow/status/unshiftio/original/CI/master?label=CI&style=flat-square)](https://github.com/unshiftio/original/actions?query=workflow%3ACI+branch%3Amaster)[![Dependencies](https://img.shields.io/david/unshiftio/original.svg?style=flat-square)](https://david-dm.org/unshiftio/original)[![Coverage Status](https://img.shields.io/coveralls/unshiftio/original/master.svg?style=flat-square)](https://coveralls.io/r/unshiftio/original?branch=master)

Original generates the origin URL for a given URL or URL object. In addition to
that it also comes with a simple `same` function to check if two URLs have the
same origin.

## Install

This module is browserify and node compatible and is therefore released in the npm
registry and can be installed using:

```
npm install --save original
```

## Usage

In all the examples we assume that the module is loaded using:

```js
'use strict';

var origin = require('original');
```

To get the origin of a given URL simply call `origin` function with any given
URL to get origin.

```js
var o = origin('https://google.com/foo/bar?path');

// o = https://google.com
```

To compare if two URLs share the same origin you can call the `same` method.

```js
if (origin.same('https://google.com/foo', 'https://primus.io')) {
  console.log('same');
} else {
  console.log('guess what, google.com and primus.io are not the same origin');
}
```

And that's it.

## License

MIT
