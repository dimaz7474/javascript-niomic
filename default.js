function add(a = 0, b = 0) {
  return a + b;
}

console.log(add());        // Output: 0
console.log(add(5));       // Output: 5 (karena b default-nya 0)
console.log(add(5, 3));    // Output: 8
console.log(add(10, 20));  // Output: 30