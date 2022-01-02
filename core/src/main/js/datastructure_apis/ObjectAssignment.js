
//Destructing assignment within an Object
import {EXAMPLE_OBJECT} from "../../../../chapter1-primitive-datatyep-and-operators/src/main/js/Constants.js";

let {name} = EXAMPLE_OBJECT;
console.log(name); //Harry Xu

//Object Literal: construct object from variables
import {EXAMPLE_STRING} from "../../../../chapter1-primitive-datatyep-and-operators/src/main/js/Constants.js";
import {EXAMPLE_NUMBER} from "../../../../chapter1-primitive-datatyep-and-operators/src/main/js/Constants.js";
let id = EXAMPLE_NUMBER, description = EXAMPLE_STRING;
let object = {id,description};
console.log(object); //{ id: 3, description: 'this is a string data type' }

