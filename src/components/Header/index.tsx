import { LogoIcon } from '@/configs';

import { Button } from '../ui/button';

export const Header = () => {
  return (
    <div className="py-5 px-5 flex items-center justify-between">
      <LogoIcon />

      <div className="flex items-center gap-4 font-bold text-sm">
        <Button variant={'ghost'}>About Us</Button>
        <Button variant={'ghost'}>FAQ</Button>
        <Button variant={'default'}>Feedback</Button>
      </div>
    </div>
  );
};
