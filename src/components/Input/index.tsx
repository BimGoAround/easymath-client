import {
  ArrowRightIcon,
  CrossCircledIcon,
  ImageIcon,
} from '@radix-ui/react-icons';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export const Input = () => {
  const [image, setImage] = useState<string | undefined>();
  const [input, setInput] = useState<string>('');

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const onRemoveImage = () => {
    setImage(undefined);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const onHandleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      //TODO: Handle enter
    }
  };

  const handleSubmit = () => {};

  return (
    <>
      <Textarea
        className="bg-zinc-700 text-zinc-50 rounded-t-2xl placeholder-zinc-400 font-medium"
        placeholder={'Type your description here...'}
        onInputChange={onInputChange}
        onKeyDown={onHandleKeyDown}
      />

      <div className="bg-zinc-700 p-3 rounded-b-2xl flex items-end justify-between">
        <div>
          {image && (
            <div className="w-8 h-8 relative">
              <div className=" w-full h-full overflow-hidden rounded relative">
                <img className="w-full h-full object-cover" src={image} />
              </div>
              <CrossCircledIcon
                className="absolute -top-1 -right-1 text-zinc-400 w-3 h-3 z-10 cursor-pointer"
                onClick={onRemoveImage}
              />
            </div>
          )}
          <input
            type="file"
            name="file"
            id="file"
            className="opacity-0 overflow-hidden w-0 h-0"
            accept="image/png, image/gif, image/jpeg"
            onChange={onImageChange}
          />
          <label
            htmlFor="file"
            className="flex items-center gap-1 text-xs text-zinc-100 cursor-pointer"
          >
            <ImageIcon />
            <span>Image</span>
          </label>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'link'}
              size={'sm'}
              disabled={!input ? true : false}
              className="hover:bg-zinc-900 rounded py-[2px] px-[1px] h-fit cursor-pointer"
              onClick={handleSubmit}
            >
              <ArrowRightIcon
                className={cn('transition-all', {
                  'text-zinc-100': !input,
                  'text-zinc-50': input,
                })}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            sideOffset={16}
            className="bg-zinc-900 text-zinc-50"
          >
            Submit
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
};
