// Function dengan satu parameter
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Dimas"); // Output: Hello, Dimas!

// Function dengan dua parameter
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8

// Function dengan parameter default
function greetWithDefault(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetWithDefault(); // Output: Hello, Guest!
greetWithDefault("Rina"); // Output: Hello, Rina!

// Function dengan parameter array
function printFruits(fruits) {
  for (let fruit of fruits) {
    console.log(fruit);
  }
}

printFruits(["Apple", "Banana", "Orange"]);
