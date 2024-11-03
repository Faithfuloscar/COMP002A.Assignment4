// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
function min(a, b){
    return a < b ? a : b;
}
// console.log(min(0, 10)); // will output 0.
console.log(min(0,10));

// console.log(min(0, -10)); // will output -10
console.log(min(0, -10));

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
function circumference(radius) {
    const pi = 3.14;
    return 2 * pi * radius ;
}
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4
console.log(circumference(5));

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
function searchString(char, string)
{
    // Split method: divides the string at each occurrence of the character and returns an array.
    // Subtract 1 because of the number of occurrences is one less.
    return string.split(char).length - 1;
}
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
console.log(searchString('s','mississippi'));
// console.log(searchString(“q”, “mississippi”)); // will output 0
console.log(searchString('q','mississippi'));
