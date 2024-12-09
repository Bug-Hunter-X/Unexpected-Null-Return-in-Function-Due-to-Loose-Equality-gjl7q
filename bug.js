function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause unexpected behavior if a or b is 0
  }
  return a + b;
}

console.log(foo(1,2)); //3
console.log(foo(null,2)); //null
console.log(foo(0,2)); //null