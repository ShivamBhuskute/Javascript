let text1 = "The quick brown fox jumps over the lazy dog.";
let regex = /fox/

console.log(regex.test(text1));
console.log(text1.match(regex));

let text2 = "abbcccdddd"
let regex2 = /ab+c{3}d{4}/
console.log(regex2.test(text2));

