const currentDate = new Date();
const todaysDate = document.querySelector('#todays-date');
const currentTime = document.querySelector('#current-time')

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const day = currentDate.getDay();
const month = currentDate.getMonth();
const date = currentDate.getDate();
const year = currentDate.getFullYear();

todaysDate.innerHTML = `${days[day]}, ${months[month]} ${date}${dateAppend(date)}, ${year}`;

function dateAppend(date) {
    if (date === 11 || date === 12 || date === 13) {
        return 'th';
    } else if (date % 10 === 1) {
        return 'st';
    } else if (date % 10 === 2) {
        return 'nd';
    } else if (date % 10 === 3) {
        return 'rd';
    } else {
        return 'th';
    }
}

//This is so the clock shows up immediately on page load

const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
currentTime.innerHTML =
    `${checkHour(hour)}:${checkZero(minutes)}:${checkZero(seconds)}${amPm(hour)}`;

//updating the clock

let update = setInterval(clock, 1000);

function clock() {
    const timeNow = new Date();
    const hour = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    currentTime.innerHTML =
        `${checkHour(hour)}:${checkZero(minutes)}:${checkZero(seconds)}${amPm(hour)}`;
}

function amPm(hour) {
    if (hour < 12) {
        return 'AM'
    } else {
        return 'PM'
    }
}

function checkZero(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

function checkHour(hour) {
    if (hour > 12) {
        return`${hour - 12}`
    }
    else {
        return hour;
    }
}

