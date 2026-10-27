const readline = require('readline-sync');

const seconds = Number(readline.question('Enter seconds: '));

const SECONDS_IN_MINUTE = 60;

const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);

const remainingSeconds = seconds % SECONDS_IN_MINUTE;

let secondsText;
let minutesText;
let remainingSecondsText;

if (seconds <= 1) {
    secondsText = seconds + ' second';
} else {
    secondsText = seconds + ' seconds';
}

if (minutes <= 1) {
    minutesText = minutes + ' minute';
} else {
    minutesText = minutes + ' minutes';
}

if (remainingSeconds <= 1) {
    remainingSecondsText = remainingSeconds + ' second';
} else {
    remainingSecondsText = remainingSeconds + ' seconds';
}

console.log(`\n${secondsText} is ${minutesText} and ${remainingSecondsText}`);