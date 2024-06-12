import { AnimatePresence, motion } from 'framer-motion';
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

  const handleClearAnswer = () => {
    setAnswer('');
  };

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col relative">
        <Background className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" />
        <Header />

        <div className="flex flex-1 flex-col items-center justify-center z-10">
          {!answer && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '40%' }}
              transition={{ delay: 0, duration: 0.4 }}
            >
              <HomeContent />
            </motion.div>
          )}

          <div className="mt-8 max-w-2xl w-full">
            <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: isLoading || answer ? '-50px' : '0%' }}
              transition={{ delay: 0, duration: 0.4 }}
            >
              <Input handleSendQuestion={sendQuestion} />
            </motion.div>

            {isLoading && <ResponseLoading />}
            {answer && (
              <AIResponse
                answer={answer}
                handleClearAnswer={handleClearAnswer}
              />
            )}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
