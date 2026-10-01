//your JS code here. If required.
let student = {
	name : "Pavan"
};
function getKeys(student){
	return Object.keys(student);
}
const multiPropObj = { name: "Alice", age: 25, city: "Hyderabad" };
console.log(getKeys(multiPropObj)); 
console.log(getKeys(student)); 