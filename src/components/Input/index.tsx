import {
  ArrowRightIcon,
  CrossCircledIcon,
  ImageIcon,
} from '@radix-ui/react-icons';
import { Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { useUploadFile } from '@/queries';

import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

type InputProps = { handleSendQuestion: any };

export const Input = ({ handleSendQuestion }: InputProps) => {
  const [image, setImage] = useState<string | undefined>();
  const [input, setInput] = useState<string>('');

  const imageUrl = useRef<string>('');

  const { uploadFile, isLoading: isUploading } = useUploadFile({
    onSuccess({ data }) {
      imageUrl.current = data.data.url;
    },
  });

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(URL.createObjectURL(img));

      const payload = {
        file: img,
      };

      uploadFile(payload);
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

  const handleSubmit = () => {
    const request = {
      message: input,
      imageUrl: imageUrl.current,
    };

    handleSendQuestion(request);
  };

  const onInputClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    const element = event.target as HTMLInputElement;
    element.value = '';
  };

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
            <div className="w-10 h-10 relative">
              <div className=" w-full h-full overflow-hidden rounded relative">
                <img
                  className={cn('w-full h-full object-cover', {
                    'opacity-30': isUploading,
                  })}
                  src={image}
                />
              </div>
              {isUploading && (
                <Loader2 className="h-4 w-4 animate-spin absolute top-[12px] left-[12px] text-white" />
              )}
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
            accept="image/png, image/jpeg"
            onClick={onInputClick}
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
