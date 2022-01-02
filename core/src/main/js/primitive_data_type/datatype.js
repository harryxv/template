/**
 * data type and operators
 * Number
 * String
 * Boolean
 * null
 * Array  -- data structure
 * Object  -- data structure
 */
import { EXAMPLE_NUMBER} from './Constants.js'
console.log(EXAMPLE_NUMBER);  //3

import { EXAMPLE_STRING} from './Constants.js'
console.log(EXAMPLE_STRING);  //3

let boolean_value = true;
console.log("boolean_value =", boolean_value);

let null_value = null;
console.log("null_value =", null_value);

let daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log("daysArray =", daysArray);

let contactObj = {
    id: 1,
    name: "Harry Xu",
    email: "harry.xu.pro@gmail.com",
    website: null
}
console.log("contactObj =", contactObj);

console.log("contactObj =", {
    id: 1,
    name: "Harry Xu",
    email: "harry.xu.pro@gmail.com",
    website: null
});