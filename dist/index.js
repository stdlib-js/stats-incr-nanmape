/** @license Apache-2.0 */

'use strict';

/**
* Compute the mean absolute percentage error incrementally, ignoring `NaN` values.
*
* @module @stdlib/stats-incr-nanmape
*
* @example
* var incrnanmape = require( '@stdlib/stats-incr-nanmape' );
*
* var accumulator = incrnanmape();
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns ~33.33
*
* m = accumulator( NaN, 3.0 );
* // returns ~33.33
*
* m = accumulator( 5.0, 2.0 );
* // returns ~91.67
*
* m = accumulator();
* // returns ~91.67
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
