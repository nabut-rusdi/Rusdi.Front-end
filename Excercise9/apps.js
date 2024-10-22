//1.Promise
// // Mengimpor function helloWorld dari modul helloWorld.js
// import { helloWorld } from './helloWorld.js';
// // Mengimpor function sayGreetings dari modul sayGreetings.js
// import { sayGreetings } from './sayGreetings.js';

// // Mendefinisikan async function messages
// async function messages() {
//     // Memanggil fungsi helloWorld dan menampilkan pesan
//     const msg1 = await helloWorld();
//     console.log(msg1);
    
//     // Memanggil fungsi sayGreetings dengan pesan sapaan
//     const msg2 = await sayGreetings("Welcome to the Module World!");
//     console.log(msg2);
// }

// // Memanggil function messages
// messages();

//2.Fetch
// // Mengimpor sayGreetings dari modul sayGreetings.js
// import { sayGreetings } from './sayGreetings.js';
// // Mengimpor printMessage dari modul utils.js
// import { printMessage } from './utils.js';

// // Async function untuk menampilkan sapaan
// async function greet() {
//     const greetingMessage = await sayGreetings("Hello and welcome!");
//     printMessage(greetingMessage);
// }

// // Memanggil function greet
// greet();

//3.Async Await
// // Mengimpor sayGreetings dari modul sayGreetings.js
// import { sayGreetings } from './sayGreetings.js';
// // Mengimpor printMessage dari modul utils.js
// import { printMessage } from './utils.js';

// // Async function untuk menampilkan sapaan
// async function greet() {
//     const greetingMessage = await sayGreetings("Hello and welcome!");
//     printMessage(greetingMessage);
// }

// // Memanggil function greet
// greet();

//4.Axios
// app.js

// Mengimpor sayGreetings dari modul sayGreetings.js
import { sayGreetings } from './sayGreetings.js';
// Mengimpor printMessage dari modul utils.js
import { printMessage } from './utils.js';

// Async function untuk menampilkan sapaan
async function greet() {
    const greetingMessage = await sayGreetings("Hello and welcome!");
    printMessage(greetingMessage);
}

// Memanggil function greet
greet();