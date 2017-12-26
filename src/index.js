import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*DOM Render*/
ReactDOM.render(<App />, document.getElementById('root'));

/*Smooth Scrolling Snippet - NO DEPENDENCIES*/
// Add the class smoothScroll to the links where you want to apply smoothScroll
// or it will messed up all the links
var links = document.querySelectorAll('.smoothScroll');
const transitionSpeed = 10; //transition intervals (ms)
const initialSpeed = 20; //initial speed (px)
const acceleration = 0.15; //transition acceleration (px)
const offset = 10; //offset so the element is not totally in the border (px)
//const = HTMLMenuElement.height;

links.forEach(link =>
  link.addEventListener('click', function(e) {
    //Prevent Default Behaviour
    e.preventDefault();
    e.stopPropagation();

    //declare the objective element
    var goingTo;
    var hrefID = link.getAttribute('href');

    //In case the # is entered
    if (hrefID === '#') {
      goingTo = document.body;
    } else {
      goingTo = document.querySelector(hrefID);
    }

    // var distance = goingTo.offsetTop - link.offsetTop;

    var totalTraveled = 0;

    if (link.offsetTop > goingTo.offsetTop) {
      //IF GOING UP
      let speed = -initialSpeed;
      let distance = goingTo.offsetTop - window.scrollY + offset;
      console.log('Going up by ' + distance + 'px');

      //Start intervals movement
      let interval = setInterval(function() {
        window.scrollBy(0, speed);
        totalTraveled += speed;
        speed = Math.round(speed - acceleration);

        //In case it goes over it will make a small jump to fix it
        if (totalTraveled <= distance) {
          window.scrollBy(0, totalTraveled - distance);
          console.log('Fixing distance by ' + (totalTraveled - distance));
          clearInterval(interval);
        }
      }, transitionSpeed);
    } else {
      //IF GOING DOWN
      let distance = goingTo.offsetTop - window.scrollY - offset;
      let speed = initialSpeed;
      console.log('Going down by ' + distance + 'px');

      //Start intervals movement
      let interval = setInterval(function() {
        window.scrollBy(0, speed);
        totalTraveled += speed;
        speed = Math.round(speed + acceleration);

        //In case it goes over it will make a small jump to fix it
        if (totalTraveled >= distance) {
          window.scrollBy(0, -(totalTraveled - distance));
          clearInterval(interval);
        }
      }, transitionSpeed);
    }
  })
);
