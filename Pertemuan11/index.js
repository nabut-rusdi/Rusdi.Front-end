let fullName = "John Doe";
let Age = 33;
let Address = "Manado";

let kalimat = "Hallo nama saya" + fullName + ", umur saya" + Age + "tahun dan saya tinggal di" + Address + ",";
console.log{kalimat};

let kalimat2 = `hallo nama saya ${fullName} umur saya ${Age}`
console.log(kalimat2);

// arrow function

function sayGreet(fullName) {
    return `Hello $(fullName)`;
}
console.log(fulName) => {
    return `hello $(fullName)`;
};

const sayGreetings2 = (fullName) => `hello $(fullName)`;


//IIFE

let output = ({}=>`Hello`)();
console.log(output);

//Colback

let numbers = [1, 2, 3, 4, 5];
let output = numbers.map((item) => item);


// Default Parameter
const sayGreetings3 = (fullName "John Doe", age = 30, address = Manado) => {
    }

    