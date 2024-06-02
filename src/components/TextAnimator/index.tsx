import { useEffect, useState } from 'react';

type TextAnimatorProps = {
  className?: string;
  text: string;
  speed: number;
};

export const TextAnimator = ({ text, speed }: TextAnimatorProps) => {
  const [displayedText, setDisplayedText] = useState(
    "To solve the expression \\( 4 + 2 \\div 2 + 1 \\), we need to follow the order of operations (PEMDAS/BODMAS):\n\nP/B: Parentheses/Brackets first  \nE/O: Exponents/Orders (i.e., powers and square roots, etc.)  \nMD/DM: Multiplication and Division (left-to-right)  \nAS: Addition and Subtraction (left-to-right)  \n\nLet's solve it step by step:\n\n1. First, perform the division:\n\\[ 4 + (2 \\div 2) + 1 \\]\n\\[ 4 + 1 + 1 \\]\n\n2. Next, perform the addition from left to right:\n\\[ (4 + 1) + 1 \\]\n\\[ 5 + 1 \\]\n\\[ 6 \\]\n\nSo, the final answer is 6.",
  );

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
