/**
 * built-in data Structures
 * Object
 * Array
 */

//Object data structure and construction
//Object Literal: construct object from variables
const contactObj = {
    id: 1,
    name: "Harry Xu",
    email: "harry.xu.pro@gmail.com",
    website: null
}
console.log("contactObj =", contactObj);

//Destructing assignment within an Object
const {name} = contactObj;
console.log(name); //Harry Xu

//Object Literal: construct object from variables
import {EXAMPLE_STRING} from "../../../../chapter1-primitive-datatyep-and-operators/src/main/js/Constants.js";
import {EXAMPLE_NUMBER} from "../../../../chapter1-primitive-datatyep-and-operators/src/main/js/Constants.js";
let id = EXAMPLE_NUMBER, description = EXAMPLE_STRING;
const object = {id,description};
console.log(object); //{ id: 3, description: 'this is a string data type' }
