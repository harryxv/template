/**
 * Array
 * Constructor: How to construct an Array object : how to put data into array
 * Built-in Algorithm: sort/search
 */

let days;
//Array data structure and its construction
//through Array Literal
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log("days =", days.toString()); //->days = Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday

//through construct and index set
let cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars); //=>[ 'Saab', 'Volvo', 'BMW' ]
console.log(cars.toString()); //->Saab,Volvo,BMW

//through "new" keyword to create an Array object.-- Arrays are a special type of objects.
let carsArray = new Array("Saab", "Volvo", "BMW");
let txt = "";
days.forEach(myFunction);

function myFunction(value, index, array) {
    console.log(index);
    txt += "I Like "+value + "\n";
}
console.log(txt);

//Array property and function
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

//Array.isArray():

console.log(Array.isArray(days));

let daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log("daysArray =", daysArray);

daysArray.sort();
console.log("daysArray =", daysArray);