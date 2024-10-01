import React, { useState, useEffect } from 'react';

const useTypewriter = (text:any, isTyping:any, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let interval:any;
    if (isTyping) {
      let i = displayText.length;
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    } else {
      let i = displayText.length;
      interval = setInterval(() => {
        if (i > 1) {
          setDisplayText(displayText.slice(0, i - 1));
          i--;
        } else {
          setDisplayText('A');
          clearInterval(interval);
        }
      }, speed);
    }

    return () => clearInterval(interval);
  }, [text, isTyping, speed, displayText]);

  return displayText;
};

const ExpandableName = () => {
  const [isHovered, setIsHovered] = useState(false);
  const displayText = useTypewriter('AKSHATA SOLAPURKAR', isHovered);

  return (
    <div 
      className="inline-block cursor-pointer min-w-[20px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="font-bold text-[20px]">
        {displayText}
      </span>
    </div>
  );
};

export default ExpandableName;