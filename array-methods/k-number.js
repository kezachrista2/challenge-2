// 13k. .find() number > 10
let mixed = [1, "apple", true, 42];
let found = mixed.find(item => typeof item === "number" && item > 10);
console.log(found); 
// Output: 42