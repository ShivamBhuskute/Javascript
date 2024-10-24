function findFirstDigit(num) {
    if (num === 0) return 0;

    while (num >= 10) {
        num /= 10;
    }

    return num;
}

// Example usage:
const number = 12345;
const firstDigit = findFirstDigit(number);
console.log("The first digit of", number, "is:", Math.floor(firstDigit));
