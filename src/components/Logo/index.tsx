import { twMerge } from 'tailwind-merge';

import { LogoIcon } from '@/configs';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return <LogoIcon className={twMerge('cursor-pointer', className)} />;
};
