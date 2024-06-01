import { FeedbackDialog } from '../FeedbackDialog';
import { Logo } from '../Logo';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <div className="py-5 px-5 flex items-center justify-between">
      <Logo />

      <div className="flex items-center gap-4 font-bold text-sm">
        <Button variant={'ghost'}>About Us</Button>
        <Button variant={'ghost'}>FAQ</Button>
        <FeedbackDialog />
      </div>
    </div>
  );
};
