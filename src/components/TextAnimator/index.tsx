import { useEffect, useState } from 'react';

type TextAnimatorProps = {
  className?: string;
  text: string;
  speed: number;
};

export const TextAnimator = ({ text, speed }: TextAnimatorProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setDisplayedText(currentText);
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return;
    () => clearInterval(timer);
  }, [text, speed]);

  return <div>{displayedText}</div>;
};
