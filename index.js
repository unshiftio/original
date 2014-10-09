'use strict';

var parse = require('url-parse');

/**
 * Transform an URL to a valid origin value.
 *
 * @param {String|Object} url URL to transform to it's origin.
 * @returns {String} The origin.
 * @api public
 */
function origin(url) {
  if ('string' === typeof url) url = parse(url);

  var protocol = url.protocol
    , port = +url.port
    , defaultport;

  //
  // Origins should not include the default port number:
  //
  // @see https://url.spec.whatwg.org/#default-port
  // @see https://url.spec.whatwg.org/#origin
  //
  if (
       (80 === port && (protocol === 'http:' || protocol === 'ws:'))
    || (443 === port && (protocol === 'https:' || protocol === 'wss:'))
  ) defaultport = false;

  return url.protocol +'//'+ url.host + (defaultport ? '' : ':'+ port);
}

/**
 * Check if the origins are the same.
 *
 * @param {String} a URL or origin of a.
 * @param {String} b URL or origin of b.
 * @returns {Boolean}
 * @api public
 */
origin.same = function same(a, b) {
  return origin(a) === origin(b);
};

//
// Expose the origin
//
module.exports = origin;