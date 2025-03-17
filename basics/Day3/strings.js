str = "   Hello, world   "

console.log(str.substring(3, 8));
console.log(str.substring(0));


// slice method
// similar to substring, but allows negative indices (counting from the end)
console.log(str.slice(-6, -1));


// replace(searchValue, newValue)
// replaces the first occurrence of searchValue with newValue.
// for global replacement, use replaceAll or a regular expression with the 'g' flag.
console.log(str.replace("world", "Shivam"));
console.log(str.replace(" ", "*"));
console.log(str.replace("Regex", / /g, "*"));


// split
// splits the string into an array of strings
console.log(str.split(". "));
console.log(str.split(""));


// trim
// removes whitespaces from the both ends of the string
console.log(str.trim());


