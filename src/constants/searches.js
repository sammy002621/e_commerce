import React from 'react'
let intervalId = null;
const words = ["hello","you","how","what","when","forever"];
const length = words.length;
let counter = 0;
let secondCounter = 2
import { useState } from "react";
const [counterSecond,setCounterSecond] = useState(2000);

function startTimer() {
  intervalId = setInterval(() => {

    if(counter == length-1){
console.log(words[counter]);


    }else{
        console.log(words[counter]);
        counter++;
    }
   
    // do something every 2 seconds
  },1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

// start the timer
startTimer();

// stop the timer after 10 seconds
setTimeout(stopTimer, length*2000);


/*
we have words that we want to show 
// store the words in an array : const words = []
for each second we show a word and then the next 
set a timeout to show the words one at a time  after every second and after all the words have appea

after the last word we stop showing it 

after the last word we start with the first one 




*/ 

function searches() {
  return (
    <div>searches</div>
  )
}

export default searches