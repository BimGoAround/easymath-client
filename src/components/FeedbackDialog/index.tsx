import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Textarea } from '../ui/textarea';
import { useState } from 'react';

export const FeedbackDialog = () => {
  const [input, setInput] = useState<string>('');

  const onInputChange = (event: any) => {
    setInput(event.target.value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'default'}>Feedback</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Leave your feedback</DialogTitle>
          <DialogDescription>
            We'd love to hear what went well or how we can improve the product
            experience.
          </DialogDescription>
        </DialogHeader>
        <Textarea
          className="h-20 border border-zinc-300 mt-4"
          placeholder="Type your message here..."
          onInputChange={onInputChange}
        />
        <DialogFooter className="mt-4 w-full">
          <DialogClose asChild>
            <Button variant={'default'} className="w-full">
              Send us
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
