import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { LogoIcon } from '@/configs';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };

  return (
    <LogoIcon
      className={twMerge('cursor-pointer', className)}
      onClick={backToHome}
    />
  );
};
