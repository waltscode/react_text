import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap'




const YourComponent = () => {
 
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ['Hello', 'Goodbye', 'Welcome'];
  
    const changeWord = () => {
      // Animate the change using GSAP
      gsap.to('.word', {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          // Increment index or loop back to 0 when reaching the end
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          // Update text content after animation completes
          document.querySelector('.word').textContent = words[currentWordIndex];
          gsap.to('.word', { duration: 0.5, opacity: 1 });
        },
      });
    };
  
    return (
      <div className="container">
        <div className="text-container">
          <h1>I'd like to say </h1>
        </div>
        <div className="word-container">
          <h1><span className="word" onClick={changeWord}>
            {words[currentWordIndex]}
          </span></h1>
        </div>
      </div>
    );
  };
  
  export default YourComponent;