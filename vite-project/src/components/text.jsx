import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap'




const YourComponent = () => {
 
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ['Discover.', 'Innovate.', 'Build.'];
  
    const changeWord = () => {
      // Animate the old word to move up and fade out
      gsap.to('.word', {
        duration: 0.5,
        y: -20,
        opacity: 0,
        onComplete: () => {
          // Increment index or loop back to 0 when reaching the end
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          // Update text content after animation completes
          document.querySelector('.word').textContent = words[currentWordIndex];
          // Reset position for next animation
          gsap.set('.word', { y: 20 });
          // Animate the new word to move in from the bottom and fade in
          gsap.to('.word', { duration: 0.5, y: 0, opacity: 1 });
        },
      });
    };
  
    return (
      <div className="container-txt">
        <div className="text-container">
          <h1>Together, we will </h1>
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