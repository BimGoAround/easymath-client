import { Header, HomeContent, Input } from '@/components';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 flex-col items-center justify-center">
        <HomeContent />

        <div className="mt-8 max-w-2xl w-full">
          <Input />

          {/* TODO: only show this one when we have the response */}
          {/* <AIResponse /> */}
        </div>
      </div>
    </div>
  );
};
