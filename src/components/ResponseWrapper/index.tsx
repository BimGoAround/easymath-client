import { PropsWithChildren } from 'react';

import { AILogo } from '@/configs';

type ResponseWrapperProps = PropsWithChildren;

export const ResponseWrapper = ({ children }: ResponseWrapperProps) => {
  return (
    <div className="mt-28 flex items-start gap-4">
      <AILogo className="flex shrink-0" />
      <div className="flex items-end gap-1">{children}</div>
    </div>
  );
};
