
// // DESTRUCTURING

// // Destructuring (Array & Object)
// //Array Destrucuring
// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// console.log(a, b, c); // Output: 1 2 3

// //0bject Destructuring
// const person = { name: 'Messi', age: 28 };
// const { name, age } = person;
// console.log(name, age); // Output: Messi 28


// //Destructuring dengan Mengambil Sebagian Item (Array & Object)
// //Array Destructuring Sebagian
// const numbers = [1, 2, 3, 4, 5];
// const [, second, , fourth] = numbers; // Mengambil item kedua dan keempat
// console.log(second, fourth); // Output: 2 4

// //Object Destructuring Sebagian
// const person = { name: 'Messi', age: 28, city: 'London' };
// const { name, city } = person;
// console.log(name, city); // Output: Bob New York


// //Destructuring dengan Default Value (Array & Object)
// //Array Destructuring dengan Default Value
// const numbers = [1];
// const [a, b = 2] = numbers;
// console.log(a, b); // Output: 1 2

// //Object Destructuring dengan Default Value
// const person = { name: 'Messi' };
// const { name, age = 28 } = person;
// console.log(name, age); // Output: Messi 28


// //Destructuring dengan Rest Operator (Array & Object)
// //Array Destructuring dengan Rest Operator
// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// console.log(first, second, rest); // Output: 1 2 [3, 4, 5]

// //Object Destructuring dengan Rest Operator
// const person = { name: 'Messi', age: 35, city: 'London' };
// const { name, ...rest } = person;
// console.log(name, rest); // Output: Messi { age: 35, city: 'London' }
