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

function displayDateTime() {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    todaysDate.textContent =
        `${days[day]}, ${months[month]} ${dateAppend(date)}, ${year}`;

    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    currentTime.textContent =
        `${checkHour(hour)}:${checkZero(minutes)}:${checkZero(seconds)}${amPm(hour)}`;
}

function dateAppend(date) {
    if (date < 10 || date > 20) {
        switch (date % 10) {
            case 1:
                return date + 'st';
            case 2:
                return date + 'nd';
            case 3:
                return date + 'rd';
        }
    }
    return date + 'th';
}

function amPm(hour) {
    return hour < 12 ? 'AM' : 'PM';
}

function checkZero(time) {
    return time < 10 ? `0${time}` : time;
}

function checkHour(hour) {
    return hour > 12 ? `${hour - 12}` : hour;
}

displayDateTime();

setInterval(() => {
    displayDateTime();
})