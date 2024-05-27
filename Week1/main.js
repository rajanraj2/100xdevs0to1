console.log("Hellow world!")


var a = 1; 
console.log(a)

var a = 2;
console.log(a);

let b = 2;
b = 3;
console.log(b)

// let b = 4; // Error
// console.log(b);

const c = 4;
// c = 5;        // Error
console.log(c);

let firstName = "rajan";
let age = 21;
let isMarried = false;

// if else : conditional statements

if (isMarried == true) {
    console.log("This person is married");
}
else if (isMarried == false) {
    console.log("This person is not married");
}

console.log("This person's name is " + firstName + " and their age is " + age + " and their marraige status is " + isMarried);

// Loops :

let answer = 0;
for (let i = 0; i <= 1000; i++) {
    answer = answer + i;
}
console.log(answer);


// Arrays and Objects :

const ages = [21, 22, 23, 24, 25];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
}

let maxAge = ages[0];
for (let i = 1; i < ages.length; i++) {
    if (ages[i] > maxAge) {
        maxAge = ages[i];
    }
}
console.log("Maximum age is: " + maxAge);

const user1 = {
    firstName: "rajan",
    gender: "male",
}

console.log(user1.firstName);
console.log(user1["gender"]);

const allUsers = [{
    firstName: "rajan",
    gender: "male",
}, {
    firstName: "sita",
    gender: "female",
}, {
    firstName: "gita",
    gender: "female",
}
]

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].gender == "male") {
        console.log(allUsers[i].firstName);
    }
}

// Functions : 

function sum(a, b) {
    return a + b;
}

const value = sum(1, 2);
console.log(value);
