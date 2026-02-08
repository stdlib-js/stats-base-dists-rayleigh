# CHANGELOG

> Package changelog.

<section class="release" id="v0.3.1">

## 0.3.1 (2026-02-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-30)

<section class="features">

### Features

-   [`fd9994f`](https://github.com/stdlib-js/stdlib/commit/fd9994fd26cb5d2e69203bae3afdb89ec278d11b) - add C implementation for `@stdlib/stats-base/dists/rayleigh/mgf` [(#4298)](https://github.com/stdlib-js/stdlib/pull/4298)
-   [`7165023`](https://github.com/stdlib-js/stdlib/commit/71650232e0a0f0cc55ba1d48ca40501cdeb90e36) - add C implementation for `@stdlib/stats-base/dists/rayleigh/quantile` [(#4333)](https://github.com/stdlib-js/stdlib/pull/4333)
-   [`927131e`](https://github.com/stdlib-js/stdlib/commit/927131e46570839ed908c96af4da0e5d230300c5) - add C implementation for `@stdlib/stats-base/dists/rayleigh/kurtosis` [(#4301)](https://github.com/stdlib-js/stdlib/pull/4301)
-   [`7042a3e`](https://github.com/stdlib-js/stdlib/commit/7042a3e7b52b18fbdf77404ca63945cc0a710710) - add C implementation for `stats/base/dists/rayleigh/stdev` [(#4314)](https://github.com/stdlib-js/stdlib/pull/4314)
-   [`84d2f1d`](https://github.com/stdlib-js/stdlib/commit/84d2f1df9be56b3186328c39457894b84712e844) - add C implementation for `stats/base/dists/rayleigh/skewness` [(#4290)](https://github.com/stdlib-js/stdlib/pull/4290)
-   [`6443564`](https://github.com/stdlib-js/stdlib/commit/6443564291cf967569bbc0a9f2d918b59bdfc295) - add C implementation for `stats/base/dists/rayleigh/median` [(#4027)](https://github.com/stdlib-js/stdlib/pull/4027)
-   [`38bb02a`](https://github.com/stdlib-js/stdlib/commit/38bb02a8b6015ae6557baf0906330529bf76f64e) - add C implementation of `stats/base/dists/rayleigh/logpdf` [(#3966)](https://github.com/stdlib-js/stdlib/pull/3966)
-   [`ed04d90`](https://github.com/stdlib-js/stdlib/commit/ed04d90cd3540e5a3b0b5cb49f623c62935edd1e) - add C implementation for `stats/base/dists/rayleigh/mode` [(#4024)](https://github.com/stdlib-js/stdlib/pull/4024)
-   [`9d270ad`](https://github.com/stdlib-js/stdlib/commit/9d270ad8299ceb0723b1b805e738fbe19faa6520) - add C implementation for `stats/base/dists/rayleigh/mean` [(#4026)](https://github.com/stdlib-js/stdlib/pull/4026)
-   [`c0d9c76`](https://github.com/stdlib-js/stdlib/commit/c0d9c760c9657e28d6b1d3daf5013708a928ae6c) - add C implementation `stats/base/dists/rayleigh/pdf` [(#3945)](https://github.com/stdlib-js/stdlib/pull/3945)
-   [`3a05645`](https://github.com/stdlib-js/stdlib/commit/3a05645a2054675503b44dffb2f6817298bc9bd9) - add C implementation of `stats/base/dists/rayleigh/logcdf` [(#3957)](https://github.com/stdlib-js/stdlib/pull/3957)
-   [`c242bc2`](https://github.com/stdlib-js/stdlib/commit/c242bc2a4e128472277ea8545c6811ea2cbbd736) - add C implementation for `stats/base/dists/rayleigh/variance` [(#3990)](https://github.com/stdlib-js/stdlib/pull/3990)
-   [`4c46667`](https://github.com/stdlib-js/stdlib/commit/4c466676e6dc28dc112a042096f94286f2e599a5) - add C implementation of `stats/base/dists/rayleigh/entropy` [(#3956)](https://github.com/stdlib-js/stdlib/pull/3956)
-   [`d7f5b56`](https://github.com/stdlib-js/stdlib/commit/d7f5b56fc072abf167bd5eb5e2163833715f2211) - add C implementation of `stats/base/dists/rayleigh/cdf` [(#3931)](https://github.com/stdlib-js/stdlib/pull/3931)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`541c34e`](https://github.com/stdlib-js/stdlib/commit/541c34e7613e29e855b192a62f4fea0368c362ed) - remove unused `pi` and `eps` dependencies from `rayleigh/mode` manifest
-   [`8070167`](https://github.com/stdlib-js/stdlib/commit/80701670fb83e7ef33abec5b14565bef540964a5) - use static qualifier for constant

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 14 issues were closed in this release:

[#3798](https://github.com/stdlib-js/stdlib/issues/3798), [#3799](https://github.com/stdlib-js/stdlib/issues/3799), [#3800](https://github.com/stdlib-js/stdlib/issues/3800), [#3801](https://github.com/stdlib-js/stdlib/issues/3801), [#3802](https://github.com/stdlib-js/stdlib/issues/3802), [#3803](https://github.com/stdlib-js/stdlib/issues/3803), [#3804](https://github.com/stdlib-js/stdlib/issues/3804), [#3805](https://github.com/stdlib-js/stdlib/issues/3805), [#3806](https://github.com/stdlib-js/stdlib/issues/3806), [#3807](https://github.com/stdlib-js/stdlib/issues/3807), [#3808](https://github.com/stdlib-js/stdlib/issues/3808), [#3809](https://github.com/stdlib-js/stdlib/issues/3809), [#3810](https://github.com/stdlib-js/stdlib/issues/3810), [#3811](https://github.com/stdlib-js/stdlib/issues/3811)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`64eb01b`](https://github.com/stdlib-js/stdlib/commit/64eb01b2ec3b527e033196d7b9629ea256c9acbd) - **bench:** include native suffix in benchmark [(#9921)](https://github.com/stdlib-js/stdlib/pull/9921) _(by Harsh Yadav)_
-   [`da376aa`](https://github.com/stdlib-js/stdlib/commit/da376aaaf20f9eacc241279eba60a6de5d476c00) - **bench:** update random value generation [(#9860)](https://github.com/stdlib-js/stdlib/pull/9860) _(by Harsh Yadav)_
-   [`89e6e3f`](https://github.com/stdlib-js/stdlib/commit/89e6e3f78d7a3adb40799b58f51a7d79c298a0bc) - **bench:** update random value generation [(#9855)](https://github.com/stdlib-js/stdlib/pull/9855) _(by Harsh Yadav)_
-   [`b71d961`](https://github.com/stdlib-js/stdlib/commit/b71d961f103c018065390d2db1118c292be181fa) - **bench:** refactor to use string interpolation in `stats/base/dists/rayleigh/stdev` [(#9788)](https://github.com/stdlib-js/stdlib/pull/9788) _(by Bhargav Dabhade)_
-   [`88af63a`](https://github.com/stdlib-js/stdlib/commit/88af63aa54165f09b84ef528cadc3dae622ab05a) - **docs:** replace manual `for` loop in examples [(#9444)](https://github.com/stdlib-js/stdlib/pull/9444) _(by Harsh Yadav)_
-   [`50b3a2c`](https://github.com/stdlib-js/stdlib/commit/50b3a2c95317bf69b879709c648aacf908439c16) - **docs:** fix function name tags _(by Philipp Burckhardt)_
-   [`97218a1`](https://github.com/stdlib-js/stdlib/commit/97218a12e1d5ec1479a5b39ac4d32318c372e922) - **docs:** fix TSDoc example code return annotations _(by Philipp Burckhardt)_
-   [`e2efe32`](https://github.com/stdlib-js/stdlib/commit/e2efe32914d0d9dae5da34e6f7e7bf7655430710) - **chore:** rename exported variable in d.ts file to match name used in example code _(by Philipp Burckhardt)_
-   [`776887e`](https://github.com/stdlib-js/stdlib/commit/776887e9577ae2402fd69c97328cb864811bd120) - **docs:** update annotation values _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`fc438e0`](https://github.com/stdlib-js/stdlib/commit/fc438e0edbad0689d6923d6f3edb959b96597662) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`9c21fd2`](https://github.com/stdlib-js/stdlib/commit/9c21fd20ef8b8a6a88abb96d80ea6d8e4c5434eb) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`5c0a9df`](https://github.com/stdlib-js/stdlib/commit/5c0a9df7ce9e03e36ea29d89b8f2852a4b0c3e3c) - **style:** remove empty lines [(#7795)](https://github.com/stdlib-js/stdlib/pull/7795) _(by stdlib-bot)_
-   [`c698e73`](https://github.com/stdlib-js/stdlib/commit/c698e73a6365ec5d828861bb26a6e3bb74fb1af8) - **chore:** add missing eps dependency to benchmark and examples configs _(by Philipp Burckhardt)_
-   [`6aeb7d0`](https://github.com/stdlib-js/stdlib/commit/6aeb7d0058535c3e7cacb2a66eed69e6806af479) - **test:** pass in opts to skip if addon is not available _(by Philipp Burckhardt)_
-   [`a4ce77e`](https://github.com/stdlib-js/stdlib/commit/a4ce77efe910c9398e75b767fb81e786a3a04cc0) - **test:** pass in opts to skip if addon is not available _(by Philipp Burckhardt)_
-   [`fd9994f`](https://github.com/stdlib-js/stdlib/commit/fd9994fd26cb5d2e69203bae3afdb89ec278d11b) - **feat:** add C implementation for `@stdlib/stats-base/dists/rayleigh/mgf` [(#4298)](https://github.com/stdlib-js/stdlib/pull/4298) _(by Dhruv Arvind Singh, Philipp Burckhardt, stdlib-bot)_
-   [`ccb1a1b`](https://github.com/stdlib-js/stdlib/commit/ccb1a1b90f0301677ca0a901e93b3b3ea7abfe4c) - **docs:** update `stats/base/dists/rayleigh` examples to use Greek symbols _(by Philipp Burckhardt)_
-   [`25e64ce`](https://github.com/stdlib-js/stdlib/commit/25e64cec268879ede40f3b76fccebb78c7945427) - **docs:** remove extra empty line [(#7430)](https://github.com/stdlib-js/stdlib/pull/7430) _(by stdlib-bot)_
-   [`541c34e`](https://github.com/stdlib-js/stdlib/commit/541c34e7613e29e855b192a62f4fea0368c362ed) - **fix:** remove unused `pi` and `eps` dependencies from `rayleigh/mode` manifest _(by Philipp Burckhardt)_
-   [`48dd346`](https://github.com/stdlib-js/stdlib/commit/48dd346fb6e276f9132a3c91451a94469fcad5bb) - **docs:** update related packages sections [(#7420)](https://github.com/stdlib-js/stdlib/pull/7420) _(by stdlib-bot)_
-   [`b5bffa7`](https://github.com/stdlib-js/stdlib/commit/b5bffa72ea42e7e856290c53c493650379487888) - **test:** align test descriptions between main and native test files _(by Philipp Burckhardt)_
-   [`ae5f230`](https://github.com/stdlib-js/stdlib/commit/ae5f2304c8b5e190e263c032ec1423ecf34e3b22) - **bench:** fix value generation _(by Athan Reines)_
-   [`7165023`](https://github.com/stdlib-js/stdlib/commit/71650232e0a0f0cc55ba1d48ca40501cdeb90e36) - **feat:** add C implementation for `@stdlib/stats-base/dists/rayleigh/quantile` [(#4333)](https://github.com/stdlib-js/stdlib/pull/4333) _(by Dhruv Arvind Singh, Philipp Burckhardt, stdlib-bot)_
-   [`3d16892`](https://github.com/stdlib-js/stdlib/commit/3d168921b5a5a81732a2cd9087a41dbfe25754cb) - **docs:** update related packages sections [(#7369)](https://github.com/stdlib-js/stdlib/pull/7369) _(by stdlib-bot)_
-   [`927131e`](https://github.com/stdlib-js/stdlib/commit/927131e46570839ed908c96af4da0e5d230300c5) - **feat:** add C implementation for `@stdlib/stats-base/dists/rayleigh/kurtosis` [(#4301)](https://github.com/stdlib-js/stdlib/pull/4301) _(by Dhruv Arvind Singh, Philipp Burckhardt, stdlib-bot)_
-   [`7042a3e`](https://github.com/stdlib-js/stdlib/commit/7042a3e7b52b18fbdf77404ca63945cc0a710710) - **feat:** add C implementation for `stats/base/dists/rayleigh/stdev` [(#4314)](https://github.com/stdlib-js/stdlib/pull/4314) _(by Dhruv Arvind Singh, Philipp Burckhardt, stdlib-bot)_
-   [`8070167`](https://github.com/stdlib-js/stdlib/commit/80701670fb83e7ef33abec5b14565bef540964a5) - **fix:** use static qualifier for constant _(by Philipp Burckhardt)_
-   [`84d2f1d`](https://github.com/stdlib-js/stdlib/commit/84d2f1df9be56b3186328c39457894b84712e844) - **feat:** add C implementation for `stats/base/dists/rayleigh/skewness` [(#4290)](https://github.com/stdlib-js/stdlib/pull/4290) _(by Dhruv Arvind Singh, Philipp Burckhardt, stdlib-bot)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`911e179`](https://github.com/stdlib-js/stdlib/commit/911e1793885aced96a177f2ea54300503b2c2a26) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`e61b1de`](https://github.com/stdlib-js/stdlib/commit/e61b1dee3334bacf30d213de5b5f1c7868c0753b) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`b9a2014`](https://github.com/stdlib-js/stdlib/commit/b9a2014b1181d30f86aa489ba90ad1f892ade8e8) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`d8c1025`](https://github.com/stdlib-js/stdlib/commit/d8c102519a591741b18bd7a58404f6f82145ccf8) - **chore:** refactor random number generation in `stats/base/dists/rayleigh` [(#5104)](https://github.com/stdlib-js/stdlib/pull/5104) _(by Ekampreet Singh Bains, Philipp Burckhardt)_
-   [`a93ccc0`](https://github.com/stdlib-js/stdlib/commit/a93ccc040bd1f43af8d022d72ce1a7dcae957acd) - **refactor:** precompute constant _(by Philipp Burckhardt)_
-   [`fc0ff17`](https://github.com/stdlib-js/stdlib/commit/fc0ff171dab59e73e1748c1bff504166adc826c3) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`6443564`](https://github.com/stdlib-js/stdlib/commit/6443564291cf967569bbc0a9f2d918b59bdfc295) - **feat:** add C implementation for `stats/base/dists/rayleigh/median` [(#4027)](https://github.com/stdlib-js/stdlib/pull/4027) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`0d52a8a`](https://github.com/stdlib-js/stdlib/commit/0d52a8a0eec7221c0147185c4ce3317db0458498) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`38bb02a`](https://github.com/stdlib-js/stdlib/commit/38bb02a8b6015ae6557baf0906330529bf76f64e) - **feat:** add C implementation of `stats/base/dists/rayleigh/logpdf` [(#3966)](https://github.com/stdlib-js/stdlib/pull/3966) _(by Vinit Pandit, Philipp Burckhardt)_
-   [`2965f8f`](https://github.com/stdlib-js/stdlib/commit/2965f8f4d1469ed76c7d9c150b39a87b62d73fbd) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`603c766`](https://github.com/stdlib-js/stdlib/commit/603c76686fc8de480628e5b96efd9733b1f059b5) - **test:** only conditionally run tests _(by Philipp Burckhardt)_
-   [`318f280`](https://github.com/stdlib-js/stdlib/commit/318f28057bf00d910a656c4f315b8de17f89d3b5) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`8553770`](https://github.com/stdlib-js/stdlib/commit/85537708442675d6bc1bf5dad5aaf252cecb82ac) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`f13ddb2`](https://github.com/stdlib-js/stdlib/commit/f13ddb2eb01e5520b6fa98634bbf9de76793036f) - **style:** use spaces for alignment in C comments _(by Philipp Burckhardt)_
-   [`ed04d90`](https://github.com/stdlib-js/stdlib/commit/ed04d90cd3540e5a3b0b5cb49f623c62935edd1e) - **feat:** add C implementation for `stats/base/dists/rayleigh/mode` [(#4024)](https://github.com/stdlib-js/stdlib/pull/4024) _(by Prashant Kumar Yadav)_
-   [`9d270ad`](https://github.com/stdlib-js/stdlib/commit/9d270ad8299ceb0723b1b805e738fbe19faa6520) - **feat:** add C implementation for `stats/base/dists/rayleigh/mean` [(#4026)](https://github.com/stdlib-js/stdlib/pull/4026) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`8bf8285`](https://github.com/stdlib-js/stdlib/commit/8bf8285aba0ecbd00ae145c4c5c098cd28135814) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`c0d9c76`](https://github.com/stdlib-js/stdlib/commit/c0d9c760c9657e28d6b1d3daf5013708a928ae6c) - **feat:** add C implementation `stats/base/dists/rayleigh/pdf` [(#3945)](https://github.com/stdlib-js/stdlib/pull/3945) _(by Vinit Pandit, Philipp Burckhardt)_
-   [`3a05645`](https://github.com/stdlib-js/stdlib/commit/3a05645a2054675503b44dffb2f6817298bc9bd9) - **feat:** add C implementation of `stats/base/dists/rayleigh/logcdf` [(#3957)](https://github.com/stdlib-js/stdlib/pull/3957) _(by Vinit Pandit, Philipp Burckhardt)_
-   [`c242bc2`](https://github.com/stdlib-js/stdlib/commit/c242bc2a4e128472277ea8545c6811ea2cbbd736) - **feat:** add C implementation for `stats/base/dists/rayleigh/variance` [(#3990)](https://github.com/stdlib-js/stdlib/pull/3990) _(by Aayush Khanna)_
-   [`4c46667`](https://github.com/stdlib-js/stdlib/commit/4c466676e6dc28dc112a042096f94286f2e599a5) - **feat:** add C implementation of `stats/base/dists/rayleigh/entropy` [(#3956)](https://github.com/stdlib-js/stdlib/pull/3956) _(by Vinit Pandit, Philipp Burckhardt)_
-   [`d7f5b56`](https://github.com/stdlib-js/stdlib/commit/d7f5b56fc072abf167bd5eb5e2163833715f2211) - **feat:** add C implementation of `stats/base/dists/rayleigh/cdf` [(#3931)](https://github.com/stdlib-js/stdlib/pull/3931) _(by Vinit Pandit, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 10 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Athan Reines
-   Bhargav Dabhade
-   Dhruv Arvind Singh
-   Ekampreet Singh Bains
-   Harsh Yadav
-   Karan Anand
-   Philipp Burckhardt
-   Prashant Kumar Yadav
-   Vinit Pandit

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`452d183`](https://github.com/stdlib-js/stdlib/commit/452d183cf423413fd1c6c8844a92c8e1a998315b) - **docs:** improve README examples for `stats/base/dists/rayleigh` namespace _(by Jaimin Godhani, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Jaimin Godhani
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d5fa8e8`](https://github.com/stdlib-js/stdlib/commit/d5fa8e8a6267a837a25a7027e9fe3e847bc2d1c5) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`ce7e336`](https://github.com/stdlib-js/stdlib/commit/ce7e3367c0f9477773fe76dd0eca64dc6ad33c02) - **docs:** update equations _(by Philipp Burckhardt)_
-   [`37f032d`](https://github.com/stdlib-js/stdlib/commit/37f032d4a571f667ea99f6f52f60b5d736c627f3) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

