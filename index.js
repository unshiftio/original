'use strict';

/**
 * Transform an URL to a valid origin value.
 *
 * @param {String|Object} url URL to transform to its origin.
 * @returns {String} The origin.
 * @api public
 */
function origin(url) {
  if ('string' === typeof url) {
    try {
      return new URL(url).origin;
    } catch (er) {
      return 'null';
    }
  }
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
