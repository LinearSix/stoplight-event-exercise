(function() {
  'use strict';

  // YOUR CODE HERE
const btnStop = document.getElementById('stopButton');
const btnSlow = document.getElementById('slowButton');
const btnGo = document.getElementById('goButton');

const lgtStop = document.getElementById('stopLight');
const lgtSlow = document.getElementById('slowLight');
const lgtGo = document.getElementById('goLight');
// let stopToggle = 0;
    // console.log(lights);
  btnStop.addEventListener('click', (event) => {
    lgtStop.classList.toggle(`stop`);
  });
  btnSlow.addEventListener('click', (event) => {
    lgtSlow.classList.toggle(`slow`);
  });
  btnGo.addEventListener('click', (event) => {
    lgtGo.classList.toggle(`go`);
  });

  btnStop.addEventListener(`mouseenter`, () => {
    console.log(`Entered ${btnStop.innerText} button`);
  });
  btnStop.addEventListener(`mouseleave`, () => {
    console.log(`Left ${btnStop.innerText} button`);
  });
  btnSlow.addEventListener(`mouseenter`, () => {
    console.log(`Entered ${btnSlow.innerText} button`);
  });
  btnSlow.addEventListener(`mouseleave`, () => {
    console.log(`Left ${btnSlow.innerText} button`);
  });
  btnGo.addEventListener(`mouseenter`, () => {
    console.log(`Entered ${btnGo.innerText} button`);
  });
  btnGo.addEventListener(`mouseleave`, () => {
    console.log(`Left ${btnGo.innerText} button`);
  });
})();
