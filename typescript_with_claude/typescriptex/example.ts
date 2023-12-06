//  Here is a TypeScript coding challenge to test an advanced developer's understanding of types:

// Concept: Types

// This challenge tests your understanding of TypeScript types, type aliases, unions, and generics.

// Code this function called `joinArrays`:

function joinArrays<T, U>(array1: T[], array2: U[]): (T | U)[] {
  return [...array1, ...array2];
}
const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];

const result1 = joinArrays(numbers, strings);
console.log(result1);
