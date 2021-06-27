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

# tic

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return a high-resolution time.

<section class="installation">

## Installation

```bash
npm install @stdlib/time-tic
```

</section>

<section class="usage">

## Usage

```javascript
var tic = require( '@stdlib/time-tic' );
```

#### tic()

Returns a high-resolution time.

```javascript
var t = tic();
// returns [<number>,<number>]
```

The returned `array` has the following format: `[seconds, nanoseconds]`.

</section>

<!-- /.usage -->

<secton class="notes">

## Notes

-   In browser environments, the implementation uses the [`performance.now`][performance-now] API. If the [`performance-now`][performance-now] API is unavailable, the implementation falls back to the [`Date`][date] object.
-   In non-browser environments, the implementation uses [`process.hrtime`][process-hrtime].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var tic = require( '@stdlib/time-tic' );
var toc = require( '@stdlib/time-toc' );

var start = tic();

setTimeout( onTimeout, 2000 );

function onTimeout() {
    var elapsed = toc( start );
    console.log( 'Elapsed: %d seconds and %d nanoseconds', elapsed[0], elapsed[1] );
}
```

</section>

<!-- /.examples -->


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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-tic.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-tic

[test-image]: https://github.com/stdlib-js/time-tic/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/time-tic/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-tic/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-tic?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-tic.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-tic/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-tic/main/LICENSE

[performance-now]: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

[date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now

[process-hrtime]: https://nodejs.org/api/process.html#process_process_hrtime_time

</section>

<!-- /.links -->
