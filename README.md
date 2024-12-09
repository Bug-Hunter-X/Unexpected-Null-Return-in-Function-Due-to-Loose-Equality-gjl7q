# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug related to loose equality (==) and its interaction with null and falsy values.

## The Bug

The `foo` function is intended to add two numbers. However, it uses loose equality (`===`) to check for null values. This leads to an incorrect result if one of the inputs is 0, as 0 is a falsy value which will also be considered as null.

## The Solution

The corrected function uses strict equality (`===`) which prevents this issue and provides the correct result.

## How to reproduce

1. Clone the repository
2. Navigate to the repository's directory
3. Run `node bug.js` to see the incorrect behavior
4. Run `node bugSolution.js` to see the correct behavior

## Related Issues

* JavaScript type coercion
* Loose equality vs Strict equality