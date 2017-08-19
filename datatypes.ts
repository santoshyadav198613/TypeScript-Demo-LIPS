let firstName: string; //string 
let age: number; //number 

let dob: Date; //date data type



let employee: string[] = ['test', 'test1', 'test2'];

for (let name of employee) {
    console.log(name);
}

for (let name in employee) {
    console.log(name);
}

employee.forEach(function (data) {
    console.log(data);
});

employee.forEach((data) => console.log(data));

let emp = employee.filter((data) => data === 'test');

console.log(emp);

let salary: number[] = [10, 20, 20, 45];

let total = salary.reduce((a, b) => a + b);

console.log(total);

let isValid: boolean;//boolean can be true or false

let departments: Array<string>;// type safe array or generics

let unionType: string | number; //union types

unionType = 'test';
unionType = 10;

enum Color { Red = 2, Green = 3, Blue = 4 }; //enums

let red = Color.Red;
let blue = Color.Blue;
let green = Color.Green;

let tuple: [string, number, string[]]; //tuples

tuple = ['test', 10, ['a', 'b', 'c']];