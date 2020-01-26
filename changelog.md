### [`1.0.0-rc.6`](https://github.com/citycide/stunsail/compare/v1.0.0-rc.5...1.0.0-rc.6) (2020-01-26)


###### FEATURES

* remove default export from index ([`b734db8`](https://github.com/citycide/stunsail/commit/b734db8e591f1851d1e270a30c652967d3f6e53c))
* add `count` ([`505f0df`](https://github.com/citycide/stunsail/commit/505f0df4122583cedaf4ee07bac816ff5b57f66e))
* **isEmpty:** treat whitespace-only strings as empty ([`a203e5e`](https://github.com/citycide/stunsail/commit/a203e5e55f61abfc0c2e6bdbd62f68d9da0620c1))


###### BREAKING CHANGES

* there are now only named exports from the main stunsail package. Use `import *
as stunsail from 'stunsail'` instead of a default import.
* **isEmpty:** `isEmpty` now considers strings consisting of only whitespace empty.

---

## [`1.0.0-rc.5`](https://github.com/citycide/stunsail/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2020-01-12)


###### FEATURES

* add `toObjectWith` ([52459a3](https://github.com/citycide/stunsail/commit/52459a3))
* **toObject,toObjectWith:** return empty object on nil input ([b231d3f](https://github.com/citycide/stunsail/commit/b231d3f))


###### BREAKING CHANGES

* **toObject,toObjectWith:** Passing `null` or `undefined` to these functions will now result in an empty object.

---

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
