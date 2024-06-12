import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import { cn } from '@/lib/utils';
import { Callback } from '@/queries';

type TextAnimatorProps = {
  className?: string;
  text: string;
  speed?: number;
  toggleTextRendered?: Callback;
};

export const TextAnimator = ({
  text,
  speed,
  toggleTextRendered,
  ...props
}: TextAnimatorProps) => {
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
        toggleTextRendered && toggleTextRendered();
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  return (
    <ReactMarkdown
      children={displayedText}
      rehypePlugins={[rehypeKatex]}
      remarkPlugins={[remarkMath]}
      className={cn('whitespace-pre-wrap', props.className)}
    />
  );
};
