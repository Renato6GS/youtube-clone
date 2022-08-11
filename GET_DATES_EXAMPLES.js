var day1 = new Date('08/25/2020');
var day2 = new Date();

var difference = day2.getTime() - day1.getTime();

console.log(difference);

console.log(difference);

// convert date form milliseconds to days
var days = Math.floor(difference / (1000 * 60 * 60 * 24));
console.log(days);

// convert date form milliseconds to months
var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
console.log(months);

// convert date form milliseconds to years
var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 30 * 12));
console.log(years);

// convert date form milliseconds to weeks
var weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
console.log(weeks);

// convert date form milliseconds to hours
var hours = Math.floor(difference / (1000 * 60 * 60));
console.log(hours);
