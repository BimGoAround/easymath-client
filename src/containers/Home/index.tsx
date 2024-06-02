import { Header, HomeContent, Input } from '@/components';
import { BackgroundIcon } from '@/configs';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />

      <div className="flex flex-1 flex-col items-center justify-center">
        <HomeContent />

        <div className="mt-8 max-w-2xl w-full">
          <Input />

          {/* TODO: only show this one when we have the response */}
          {/* <AIResponse /> */}
        </div>
      </div>

      <BackgroundIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" />
    </div>
  );
};
