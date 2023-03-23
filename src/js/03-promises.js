import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector(".form");
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

function handleSubmit(event) {
  event.preventDefault();
  let delayNum = Number(firstDelay.value);

  for (let i = 1; i <= Number(amount.value); i+=1 ) {
    const position = i;
    const delay = delayNum;
    const createPromise = (position, delay) => {
    const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3; 
      setTimeout(() => {
        if (shouldResolve) {   
          const promiseEl = {
            position,
            delay,
          };
            resolve(promiseEl);
          } else {   
            const promiseEl = {
              position,
              delay,
            };
            reject(promiseEl);
          }
      }, delay);       
    });
    return promise;    
    }
    createPromise(position, delay)
    .then(({ position, delay }) => {Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);})
    .catch(({ position, delay }) => {Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);});
    delayNum += Number(delayStep.value);
  };
};
form.addEventListener("submit", handleSubmit);

