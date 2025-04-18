<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Rayleigh

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Rayleigh distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-rayleigh
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var rayleigh = require( '@stdlib/stats-base-dists-rayleigh' );
```

#### rayleigh

Rayleigh distribution.

```javascript
var dist = rayleigh;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, sigma )`][@stdlib/stats/base/dists/rayleigh/cdf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, sigma )`][@stdlib/stats/base/dists/rayleigh/logcdf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, sigma )`][@stdlib/stats/base/dists/rayleigh/logpdf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, sigma )`][@stdlib/stats/base/dists/rayleigh/mgf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, sigma )`][@stdlib/stats/base/dists/rayleigh/pdf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, sigma )`][@stdlib/stats/base/dists/rayleigh/quantile]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( sigma )`][@stdlib/stats/base/dists/rayleigh/entropy]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( sigma )`][@stdlib/stats/base/dists/rayleigh/kurtosis]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution excess kurtosis.</span>
-   <span class="signature">[`mean( sigma )`][@stdlib/stats/base/dists/rayleigh/mean]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution expected value.</span>
-   <span class="signature">[`median( sigma )`][@stdlib/stats/base/dists/rayleigh/median]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution median.</span>
-   <span class="signature">[`mode( sigma )`][@stdlib/stats/base/dists/rayleigh/mode]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution mode.</span>
-   <span class="signature">[`skewness( sigma )`][@stdlib/stats/base/dists/rayleigh/skewness]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution skewness.</span>
-   <span class="signature">[`stdev( sigma )`][@stdlib/stats/base/dists/rayleigh/stdev]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution standard deviation.</span>
-   <span class="signature">[`variance( sigma )`][@stdlib/stats/base/dists/rayleigh/variance]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Rayleigh][rayleigh-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Rayleigh( [sigma] )`][@stdlib/stats/base/dists/rayleigh/ctor]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Rayleigh = require( '@stdlib/stats-base-dists-rayleigh' ).Rayleigh;

var dist = new Rayleigh( 2.0 );

var y = dist.pdf( 0.8 );
// returns ~0.185
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var rayleigh = require( '@stdlib/stats-base-dists-rayleigh' );

/*
* The Rayleigh distribution can be used to model wind speeds.
* Let's consider a scenario where we want to estimate various properties related to wind speeds.
*/

// Set the Rayleigh distribution parameter (scale parameter):
var s = 10.0;

// Calculate mean, variance, and standard deviation of the Rayleigh distribution:
console.log( rayleigh.mean( s ) );
// => ~12.533

console.log( rayleigh.variance( s ) );
// => ~42.920

console.log( rayleigh.stdev( s ) );
// => ~6.551

// Evaluate the Probability Density Function (PDF) for a specific wind speed:
var w = 15.0;
console.log( rayleigh.pdf( w, s ) );
// => ~0.049

// Determine Cumulative Distribution Function (CDF) for wind speeds up to a certain value:
var t = 15.0;
console.log( rayleigh.cdf( t, s ) );
// => ~0.675

// Calculate the probability of wind speeds exceeding the threshold:
var p = 1.0 - rayleigh.cdf( t, s );
console.log( 'Probability of wind speeds exceeding ' + t + ' m/s:', p );

// Find the wind speed at which there's a 70% chance it won't exceed using the Quantile function:
var c = 0.7;
console.log( rayleigh.quantile( c, s ) );
// => ~15.518
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-rayleigh.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-rayleigh

[test-image]: https://github.com/stdlib-js/stats-base-dists-rayleigh/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-rayleigh/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-rayleigh?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-rayleigh.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-rayleigh/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-rayleigh/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-rayleigh/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-rayleigh/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-rayleigh/main/LICENSE

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/rayleigh/ctor]: https://github.com/stdlib-js/stats-base-dists-rayleigh-ctor

[@stdlib/stats/base/dists/rayleigh/entropy]: https://github.com/stdlib-js/stats-base-dists-rayleigh-entropy

[@stdlib/stats/base/dists/rayleigh/kurtosis]: https://github.com/stdlib-js/stats-base-dists-rayleigh-kurtosis

[@stdlib/stats/base/dists/rayleigh/mean]: https://github.com/stdlib-js/stats-base-dists-rayleigh-mean

[@stdlib/stats/base/dists/rayleigh/median]: https://github.com/stdlib-js/stats-base-dists-rayleigh-median

[@stdlib/stats/base/dists/rayleigh/mode]: https://github.com/stdlib-js/stats-base-dists-rayleigh-mode

[@stdlib/stats/base/dists/rayleigh/skewness]: https://github.com/stdlib-js/stats-base-dists-rayleigh-skewness

[@stdlib/stats/base/dists/rayleigh/stdev]: https://github.com/stdlib-js/stats-base-dists-rayleigh-stdev

[@stdlib/stats/base/dists/rayleigh/variance]: https://github.com/stdlib-js/stats-base-dists-rayleigh-variance

[@stdlib/stats/base/dists/rayleigh/cdf]: https://github.com/stdlib-js/stats-base-dists-rayleigh-cdf

[@stdlib/stats/base/dists/rayleigh/logcdf]: https://github.com/stdlib-js/stats-base-dists-rayleigh-logcdf

[@stdlib/stats/base/dists/rayleigh/logpdf]: https://github.com/stdlib-js/stats-base-dists-rayleigh-logpdf

[@stdlib/stats/base/dists/rayleigh/mgf]: https://github.com/stdlib-js/stats-base-dists-rayleigh-mgf

[@stdlib/stats/base/dists/rayleigh/pdf]: https://github.com/stdlib-js/stats-base-dists-rayleigh-pdf

[@stdlib/stats/base/dists/rayleigh/quantile]: https://github.com/stdlib-js/stats-base-dists-rayleigh-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
