const newObj1 = new Object();
console.log("new object",newObj1);
newObj1.id = "123";
newObj1.name = "Dharmesh";
newObj1.email = "dharmesh@gmail.com";

console.log("obj",newObj1);
const obj1 = {
    1 : "a",2 : "b",3: "c"
}
const obj2 = {
    4: "a", 5: "b",6: "c"
}


const obj3 = Object.assign({},obj1,obj2);
console.log(obj3)

const keyOfObject = Object.keys(newObj1);
console.log(keyOfObject)

const valuesOfObject = Object.values(newObj1);
console.log(valuesOfObject)

const convertObjectIntoArray = Object.entries(newObj1);
console.log(convertObjectIntoArray)