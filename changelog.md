## [`1.0.0-rc.4`](https://github.com/citycide/stunsail/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2020-01-02)


###### BUG FIXES

* **types:** create index for type definitions ([58ee0cd](https://github.com/citycide/stunsail/commit/58ee0cd))


---

## [`1.0.0-rc.3`](https://github.com/citycide/stunsail/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2020-01-02)


###### BUG FIXES

* **babel:** use local names for generated imports ([f6c5f1e](https://github.com/citycide/stunsail/commit/f6c5f1e))


###### FEATURES

* **apply,cap:** report what type was received in TypeError ([c3d1848](https://github.com/citycide/stunsail/commit/c3d1848))
* **pipe:** change pipe to accept an argument list instead of array ([6d317e2](https://github.com/citycide/stunsail/commit/6d317e2))
* add TypeScript definitions ([a8c09cc](https://github.com/citycide/stunsail/commit/a8c09cc))
* require node 12 ([5a80774](https://github.com/citycide/stunsail/commit/5a80774))


###### BREAKING CHANGES

* **pipe:** `pipe` now accepts multiple arguments rather than a single array.
* Support for Node < 12 has been dropped.

---

## [`1.0.0-rc.2`](https://github.com/citycide/stunsail/compare/v1.0.0-rc.1...1.0.0-rc.2) (2019-01-15)


###### BREAKING CHANGES

* Node versions <8 are no longer supported.

###### FEATURES

* add `textCase` ([`09916d8`](https://github.com/citycide/stunsail/commit/09916d8a2101b0b6956ec5475ea8c1b7675e91b6))
* drop node 6 ([`ae79299`](https://github.com/citycide/stunsail/commit/ae7929958be2520ae98cbbc0fd7704b9aebb8671))

###### PERFORMANCE

* move some regexes to constants ([`a87e0a7`](https://github.com/citycide/stunsail/commit/a87e0a70b10a35542c50a7a259a09767b33831e5))

---

## `1.0.0-rc.1` (2017-12-22)

Initial release candidate.
