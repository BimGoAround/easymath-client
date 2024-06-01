import React, { useState } from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const [input, setInput] = useState<string>('');

    const onInputChange = (event: any) => {
      console.log(event.target.value);

      setInput(event.target.value);
    };
    return (
      <textarea
        className={cn(
          'flex w-full bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 resize-none outline-none',
          className,
        )}
        value={input}
        onChange={onInputChange}
        ref={ref}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
