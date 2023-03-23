// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const daysNumEl = document.querySelector('[data-days]');
const hoursNumEl = document.querySelector('[data-hours]');
const minutesNumEl = document.querySelector('[data-minutes]');
const secondsNumEl = document.querySelector('[data-seconds]');
let dateEl = new Date();
startButton.disabled = true;

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] <= new Date()) {
        startButton.disabled = true;
        alert("Please choose a date in the future");
        dateEl = null;
        return;
      } else {
        startButton.disabled = false;
        dateEl = selectedDates[0];
        return;
      };
    }, 
  });
  let timerId = null;
  startButton.addEventListener('click', () => {
    startButton.disabled = true;
    timerId = setInterval(() => {
        const difference = dateEl - new Date();
        if (difference <= 0) {
            return;
        } else {
            let dataTime = {};
            function convertMs(difference) {
                // Number of milliseconds per unit of time
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;
              
                // Remaining days
                const days = Math.floor(difference / day);
                // Remaining hours
                const hours = Math.floor((difference % day) / hour);
                // Remaining minutes
                const minutes = Math.floor(((difference % day) % hour) / minute);
                // Remaining seconds
                const seconds = Math.floor((((difference % day) % hour) % minute) / second);
                
                return { days, hours, minutes, seconds };
              }
            dataTime = convertMs(difference);
            function addLeadingZero(data) {
                const dataStr = `${data}`;                
                return dataStr.padStart(2, "0");
            }
            let a = dataTime.days;
            let b = dataTime.hours;
            let c = dataTime.minutes;
            let d = dataTime.seconds;

            daysNumEl.textContent = addLeadingZero(a);
            hoursNumEl.textContent = addLeadingZero(b);
            minutesNumEl.textContent = addLeadingZero(c);
            secondsNumEl.textContent = addLeadingZero(d);
        }
      }, 1000);
  })
    