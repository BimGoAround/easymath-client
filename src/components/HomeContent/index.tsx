import { memo } from 'react';

export const HomeContent = memo(() => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <span className="font-bold text-5xl leading-10">
        Photo, Formula, and Answer
      </span>
      <span className="font-normal text-base leading-7 mt-3">
        Take a photo, describe the problem, submit and get answer within seconds
      </span>
    </div>
  );
});
