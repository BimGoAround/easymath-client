import { useState } from 'react';

import {
  AIResponse,
  Header,
  HomeContent,
  Input,
  ResponseLoading,
} from '@/components';
import { BackgroundIcon as Background } from '@/configs';
import { usePostQuestion } from '@/queries';

export const Home = () => {
  const [answer, setAnswer] = useState<string>('');

  const { sendQuestion, isLoading } = usePostQuestion({
    onSuccess(data) {
      setAnswer(data.message.content);
    },
  });

  return (
    <div className="min-h-screen flex flex-col relative">
      <Background className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" />
      <Header />

      <div className="flex flex-1 flex-col items-center justify-center z-10">
        <HomeContent />

        <div className="mt-8 max-w-2xl w-full">
          <Input handleSendQuestion={sendQuestion} />

          {isLoading && <ResponseLoading />}
          {answer && <AIResponse answer={answer} />}
        </div>
      </div>
    </div>
  );
};
