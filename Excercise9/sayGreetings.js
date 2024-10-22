//1. Promise
// Mendefinisikan function sayGreetings dan mengexport-nya
// export function sayGreetings(greeting) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(greeting);
//         }, 2000);
//     });
// }

//2.Fetch
// Mengimpor fungsi delay dari utils.js
// import { delay } from './utils.js';

// // Fungsi sayGreetings yang menunggu selama 2 detik sebelum mengembalikan pesan sapaan
// export async function sayGreetings(greeting) {
//     await delay(2000); // Menunggu 2 detik
//     return greeting;
// }

//3.Async Await
// // Mengimpor fungsi delay dari utils.js
// import { delay } from './utils.js';

// // Fungsi sayGreetings yang menunggu selama 2 detik sebelum mengembalikan pesan sapaan
// export async function sayGreetings(greeting) {
//     await delay(2000); // Menunggu 2 detik
//     return greeting;
// }

//4.Axios
// Mengimpor fungsi delay dari utils.js
import { delay } from './utils.js';

// Fungsi sayGreetings yang menunggu selama 2 detik sebelum mengembalikan pesan sapaan
export async function sayGreetings(greeting) {
    await delay(2000); // Menunggu 2 detik
    return greeting;
}