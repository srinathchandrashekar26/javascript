/* Arithmetic operators +,-,*,/ = incrememnt, decrement, exponentiation, Division */
/*
let a=5;
let b=2;

//Addition operators
console.log("a=", a, "b=",b);
console.log("a + b=", a+b);

//Supration operators
console.log("a - b=", a-b);

//Multiplication operators
console.log("a*b=", a*b);

//Division operators
console.log("a / b=", a/b);

//Modulus operators
console.log("a % b=", a%b);

//Exponentiation operators
console.log("a ** b=", a**b);

//Uninary operators
a++;//post increment
console.log("a++", a);
//Uninary operators
a--; //post decrement
console.log("a--", a);
*/

// Assignment operators - assigns value
// =, +=, -=, *=, /=, **=, %= - List  of operators
/*let a = 5;

a += 4; //a=a+4;
console.log("a =", a);*/

//Comparision operators - used to compare 2 numbers.
// Equal to ==, Equal to & type ===, Not equal to !=, Note equal to & type !==
//>,>=,<,<=
/*let a =5;
let b=5;
console.log("a == b", a==b);
console.log("a === b", a===b);
console.log("a !== b", a!=b);
console.log("a !=== b", a!==b);
*/

//Logical operators &&, ||, !
//Logical AND && - both values need to be true.

/*let a =5;
let b = 3;
console.log(" a>b && a===6 = ", a>b && a===6);
console.log(" a>b || a===6 ", a>b || a===6);
console.log(" a>b ! = ", !(a>b) );*/
//Conditional statements
let age = 17;

if(age >= 18){
    console.log("you can vote")
}
if(age <= 18){
    console.log("you cannot vote")
}

//odd or event If Else

let num = 17;

if(num%2 === 0)
{
    console.log("Is even");
}
else{
    console.log("Is odd");
}

//Terninary operators - a ? b : c Confition : True : False

let result = age >= 18 ? "adult" : "not adult";
console.log(result);

switch(age){
    case 18: console.log("Eligible");
    break;
    case 17: console.log("Not Eligible");
    break;
    default: console.log("Unable to fetch");
}
// Pratice 1
/* let number = prompt("Enter a number");
if( number % 5 ===0){
    console.log(number, "is multiple of 5");
}else{
    console.log(number, "is not a multiple of 5");
}*/

//Pratice 2

let score = prompt("Enter your score");
let grade;
if ( score >= 90  && score <=100)
{
    grade = "A";
} else if ( score >= 70 && score <90){
    grade = "B";
} else if ( score >= 60 && score <70){
    grade = "C";
} else if ( score >= 50 && score <=60){
    grade = "D";
} else if ( score >= 0 && score <50){
    grade = "F"
}else{
    grade = "Invalid";
}
console.log("Your grade is", grade);