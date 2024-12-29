function foo(a, b) {
  if (a === null || a === 0 || b === null || b === 0) {
    return 0; // Or handle the case as needed
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null)); // 0
console.log(foo(0,2)); //0
console.log(foo(2,0)); //0