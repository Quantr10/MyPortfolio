import logo1 from '../../assets/logo1.jpg';
import "./index.css";
import React, { useState, useEffect } from 'react'

const Intro = () => {
  const phrases = ["Quan Tran", "a CS major", "a developer"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
      if (charIndex < phrases[currentPhraseIndex].length) {
        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + phrases[currentPhraseIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } 
      else {
        const nextPhraseTimeout = setTimeout(() => {
            setDisplayedText('');
            setCharIndex(0);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
        return () => clearTimeout(nextPhraseTimeout);
      }
  }, [charIndex, currentPhraseIndex, phrases]);

  return (
      <section id="intro" className="intro">
          <div className="intro-image">
              <img src={logo1} alt="Profile" className="image" />
          </div>
          <div className="intro-text">
              <h1>Hi! I am</h1>
              <h1 className="phrase">{displayedText}</h1>
          </div>
      </section>
  );
};
export default Intro;