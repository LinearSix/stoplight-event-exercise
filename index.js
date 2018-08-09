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
})();
