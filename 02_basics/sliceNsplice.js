const arr = [1,2,3,[4,5],6,[7,[8,9]]];

console.log(arr);
const flatArray = arr.flat(Infinity)
console.log(flatArray)
// console.log("Original A:", arr)


// console.log(arr.slice(1,3));

// console.log("Original B:", arr)

// console.log(arr.splice(1,3));

// console.log("Original c:", arr)



console.log(Array.from("Dharmesh"));

let obj = {"name" : "sonar"}
const result = Array.from(obj.name);
console.log(result);

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3))