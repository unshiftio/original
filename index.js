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

  var noport
    , protocol = url.protocol
    , port = url.port && +url.port;

  //
  // Origins should not include the default port number:
  //
  // @see https://url.spec.whatwg.org/#default-port
  // @see https://url.spec.whatwg.org/#origin
  //
  if (
       !port
    || 'file:' === protocol
    || (80 === port && ('http:' === protocol || 'ws:' === protocol ))
    || (443 === port && ('https:' === protocol || 'wss:' === protocol))
  ) noport = true;

  return url.protocol +'//'+ url.hostname + (noport ? '' : ':'+ port);
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
