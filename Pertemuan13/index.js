const func1 = (parameter1,parameter2, parameter3, parameter4, parameter5)
console.log(param1,param2,param3,param4,param5);


func1("A","B","C","D","E");

const func2 = (...params); => {
    console.log(params);
};


//spread operator

let numbers(1, 2, 3, 4, 5,);
console.log(numbers);
console.log(...numbers);



//array
let numbers2 = (...numbers);
numbers.push(6);
console.log(numbers);
console.log(numbers2);


//2. menggabungkan array

let arr1 = (1,2,3);
let arr2 = (4,5,6);
let arr3 = (7,8,9);

 let numbers3 = arr1.concat(arr2, arr3);
 let numbers4 = (...arr2, ...arr2, ...arr3);


 //Object

 const Leo = {
    fulName: "Leo Messi"
    age: 30,
 };

 const Leo2 = {...Leo, ...age};