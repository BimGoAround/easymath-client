import {
  ArrowRightIcon,
  CrossCircledIcon,
  ImageIcon,
} from '@radix-ui/react-icons';
import { useState } from 'react';

import { EllipsisWave, Header, TextAnimator } from '@/components';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AILogo } from '@/configs';

export const Home = () => {
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

  const onInputChange = (event: any) => {
    setInput(event.target.value);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 flex-col items-center justify-center">
        <span className="font-bold text-5xl leading-10">
          Photo, Formula, and Answer
        </span>
        <span className="font-normal text-base leading-7 mt-3">
          Take a photo, describe the problem, submit and get answer within
          seconds
        </span>

        <div className="mt-8 max-w-2xl w-full">
          <Textarea
            className="bg-zinc-700 text-zinc-400 resize-none rounded-t-2xl outline-none"
            placeholder={'Type your description here...'}
            value={input}
            onChange={onInputChange}
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
            <Button
              variant={'link'}
              size={'sm'}
              disabled={!input ? true : false}
              className="hover:bg-zinc-900 rounded"
            >
              <ArrowRightIcon className="text-zinc-100" />
            </Button>
          </div>

          <div className="mt-28 flex items-start gap-4">
            <AILogo />
            <div className="flex items-end gap-1">
              <span className="text-zinc-400 ">EasyMath is thinking</span>

              <EllipsisWave className="mb-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
