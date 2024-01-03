//Learn about loops in javascript
//for loop
/*
for (let count =1; count<=5; count++) {
    console.log("Srinath C");
}
console.log("Loop ended"); */

//Calculate sum of 1 to 5
/*
let sum =0;
for(let i=1; i<=5; i++){
    sum = sum+i;
}
console.log("Sum =", sum);*/

//While loop
/*let i =1;
while(i<=5){
    console.log("i=",i);
    i++;
}*/
// Do While loop
/*let i =20;
do {
    console.log("i=" ,i);
    i++;
} while (i<=10);*/

//for of
/*let str ="Srinath";

for (let i of str) {
    console.log("i = ", i);
}*/

//for in loop
/*let student ={
    name: "Srinath C",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for (let key in student){
    console.log("key =", key, "value=", student[key]);
}*/


//Practice Q1
/*for(let num=0; num<=100; num++){
    if(num%2 ===0){
        console.log(num);}
}*/
//Practice Q2
let gameNum = 25;
let userNum = prompt("Guess the game number: ");
while(userNum != gameNum){
    userNum = prompt("Your guess was wrong, guess again: ");
}
console.log("Congrats you guessed it right");