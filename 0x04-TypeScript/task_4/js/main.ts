import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";

// Create constants for subjects
const cpp = new Cpp({ firstName: "John", lastName: "Doe", experienceTeachingC: 10 });
const java = new Java({ firstName: "Jane", lastName: "Smith", experienceTeachingJava: 8 });
const react = new React({ firstName: "Alex", lastName: "Johnson", experienceTeachingReact: 6 });

// Create teacher object
const cTeacher = { firstName: "Michael", lastName: "Clark", experienceTeachingC: 12 };

// Set teachers for subjects
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

// Perform operations and print results
console.log("C++:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("\nJava:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("\nReact:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
