// alert(we are beta!!!);
console.log('we are Beta!!!');
var firstName = 'Anisa';
var age = 12;

let lastName = 'Danso';
const boilingWatertemperature = 100;

// let lastName = 'Asare'
// boilingWatertemperature = 120;

console.log(firstName, lastName, age, boilingWatertemperature)

let wannaDie = true;

let bottle = {
    color: 'blue',
    volume: 580,
    storeWater: null
}

//  Conditional Statements (If/Else)
if(age >= 18) {
    console.log('You are eligible');
} else {
    console.log('wait till you are eighteen.');
}

for(let i = 1; i <= 8;  i++) {
    console.log('The value of i is', i);
}

let text = 'John Doe';
let carName = "Volvo XC60";
let CarName = 'Volvo XC60';

console.log(text, carName, carName)

// Functions - Defining
function isELigible() {
    if(age >= 18) {
        return('Welcome to XXX');
    } else {
        return('wait till you are eighteen.');
    }
}

// Functions - Invoking
console.log(isELigible());
alert(isELigible());
document.body.innerHTML = isELigible();