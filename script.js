const currentDate = new Date();
const todaysDate = document.querySelector('#todays-date');
const currentTime = document.querySelector('#current-time')


// Getting the day of the week

const day = currentDate.getDay();

function dayOfWeek(day) {
    switch (day) {
        case 0:
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
        default:
            return "ERROR!"
            break;
    }
}

// Getting the month 

const month = currentDate.getMonth();

function monthOfYear(month) {
    switch (month) {
        case 0:
            return 'January';
            break;
        case 1:
            return 'February';
            break;
        case 2:
            return 'March';
            break;
        case 3:
            return 'April';
            break;
        case 4:
            return 'May';
            break;
        case 5:
            return 'June';
            break;
        case 6:
            return 'July';
            break;
        case 7:
            return 'August';
            break;
        case 8:
            return 'September';
            break;
        case 9:
            return 'October';
            break;
        case 10:
            return 'November';
            break;
        case 11:
            return 'December';
            break;
        default:
            return "ERROR!"
            break;
    }
}

const date = currentDate.getDate();
const year = currentDate.getFullYear();

todaysDate.innerHTML = `${dayOfWeek(day)}, ${monthOfYear(month)} ${date}, ${year}`;

// Creating and updating the clock

let update = setInterval(clock, 1000);

function clock() {
    const timeNow = new Date();
    const hour = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    currentTime.innerHTML =
        `${checkHour(hour)}:${checkZero(minutes)}:${checkZero(seconds)} ${amPm(hour)}`;
}

function amPm(time) {
    if (time > 12) {
        return 'PM';
    } else {
        return 'AM';
    }
}

function checkHour(time) {
    if (time > 12) {
        return `${time - 12}`;
    } else {
        return time;
    }
}
function checkZero(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}
