import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { cn } from '@/lib/utils';

type TextAnimatorProps = {
  className?: string;
  text: string;
  speed: number;
};

export const TextAnimator = ({ text, speed, ...props }: TextAnimatorProps) => {
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

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <ReactMarkdown
      {...props}
      remarkPlugins={[remarkGfm]}
      className={cn('whitespace-pre-wrap', props.className)}
    >
      {displayedText}
    </ReactMarkdown>
  );
};
