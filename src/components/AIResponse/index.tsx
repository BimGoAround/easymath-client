import { motion } from 'framer-motion';
import { useState } from 'react';

import { Callback } from '@/queries';

import { ResponseWrapper } from '../ResponseWrapper';
import { TextAnimator } from '../TextAnimator';
import { Button } from '../ui/button';

type AIResponseProps = {
  answer: string;
  handleClearAnswer?: Callback;
};

export const AIResponse = ({ answer, handleClearAnswer }: AIResponseProps) => {
  const [isTextRendered, setIsTextRendered] = useState<boolean>(false);

  const toggleTextRendered = () => {
    setIsTextRendered((prev) => !prev);
  };

  return (
    <>
      <ResponseWrapper>
        <TextAnimator
          className="pb-5"
          text={answer}
          speed={30}
          toggleTextRendered={toggleTextRendered}
        />
      </ResponseWrapper>
      {isTextRendered && (
        <motion.div
          className="mt-7 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button onClick={handleClearAnswer}>Ask another question</Button>
        </motion.div>
      )}
    </>
  );
};
