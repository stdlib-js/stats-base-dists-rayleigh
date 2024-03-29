/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace rayleigh
*/
var rayleigh = {};

/**
* @name cdf
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/cdf}
*/
setReadOnly( rayleigh, 'cdf', require( '@stdlib/stats-base-dists-rayleigh-cdf' ) );

/**
* @name Rayleigh
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/ctor}
*/
setReadOnly( rayleigh, 'Rayleigh', require( '@stdlib/stats-base-dists-rayleigh-ctor' ) );

/**
* @name entropy
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/entropy}
*/
setReadOnly( rayleigh, 'entropy', require( '@stdlib/stats-base-dists-rayleigh-entropy' ) );

/**
* @name kurtosis
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/kurtosis}
*/
setReadOnly( rayleigh, 'kurtosis', require( '@stdlib/stats-base-dists-rayleigh-kurtosis' ) );

/**
* @name logcdf
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/logcdf}
*/
setReadOnly( rayleigh, 'logcdf', require( '@stdlib/stats-base-dists-rayleigh-logcdf' ) );

/**
* @name logpdf
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/logpdf}
*/
setReadOnly( rayleigh, 'logpdf', require( '@stdlib/stats-base-dists-rayleigh-logpdf' ) );

/**
* @name mean
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/mean}
*/
setReadOnly( rayleigh, 'mean', require( '@stdlib/stats-base-dists-rayleigh-mean' ) );

/**
* @name median
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/median}
*/
setReadOnly( rayleigh, 'median', require( '@stdlib/stats-base-dists-rayleigh-median' ) );

/**
* @name mgf
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/mgf}
*/
setReadOnly( rayleigh, 'mgf', require( '@stdlib/stats-base-dists-rayleigh-mgf' ) );

/**
* @name mode
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/mode}
*/
setReadOnly( rayleigh, 'mode', require( '@stdlib/stats-base-dists-rayleigh-mode' ) );

/**
* @name pdf
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/pdf}
*/
setReadOnly( rayleigh, 'pdf', require( '@stdlib/stats-base-dists-rayleigh-pdf' ) );

/**
* @name quantile
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/quantile}
*/
setReadOnly( rayleigh, 'quantile', require( '@stdlib/stats-base-dists-rayleigh-quantile' ) );

/**
* @name skewness
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/skewness}
*/
setReadOnly( rayleigh, 'skewness', require( '@stdlib/stats-base-dists-rayleigh-skewness' ) );

/**
* @name stdev
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/stdev}
*/
setReadOnly( rayleigh, 'stdev', require( '@stdlib/stats-base-dists-rayleigh-stdev' ) );

/**
* @name variance
* @memberof rayleigh
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/rayleigh/variance}
*/
setReadOnly( rayleigh, 'variance', require( '@stdlib/stats-base-dists-rayleigh-variance' ) );


// EXPORTS //

module.exports = rayleigh;
