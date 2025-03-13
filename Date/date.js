const d = new Date(); //const d = new Date("2021-03-25");

console.log(d.getFullYear());

console.log(d.getMonth());

//the index starts from 0
console.log(d.getDay());

//to rreturn month name instead of just the number
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
console.log(months[d.getMonth()]);

// getFullYear()	    Get year as a four digit number (yyyy)
// getMonth()	        Get month as a number (0-11)
// getDate()	        Get day as a number (1-31)
// getDay()	            Get weekday as a number (0-6)
// getHours()	        Get hour (0-23)
// getMinutes()	        Get minute (0-59)
// getSeconds()	        Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	        Get time (milliseconds since January 1, 1970)

// use set methods to do the same
