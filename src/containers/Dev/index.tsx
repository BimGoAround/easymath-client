import { useState } from 'react';

import { TextAnimator } from '@/components';
import { Button } from '@/components/ui/button';
import { useGetTest } from '@/queries';

export const DevContainer = () => {
  const [isEnableTest, setIsEnableTest] = useState(false);
  const answer = {
    index: 0,
    message: {
      role: 'assistant',
      content:
        "Sure, let's solve the equation step by step:\n\nFirst, simplify the right side of the equation:\n\n $$ \\sqrt(x) = 25 * 4 $$\nsqrt(x) = 100\n\nNext, to solve for x, we need to eliminate the square root by squaring both sides of the equation:\n\n(sqrt(x))^2 = 100^2\nx = 10000\n\nSo the final answer is:\nx = 10000",
    },
    logprobs: null,
    finish_reason: 'stop',
  };

  const { isLoading } = useGetTest({
    enabled: isEnableTest,
  });

  const handleClickTest = () => {
    setIsEnableTest(true);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-5">DevContainer</h1>

      {/* TEST API SECTION */}
      <div className="test-api-section p-5">
        <h2 className="text-2xl font-bold">Test API</h2>
        <Button loading={isLoading} onClick={handleClickTest}>
          Test API
        </Button>
      </div>

      {/* MARKDOWN FORMAT SECTION */}
      <div className="markdown-format-section p-5">
        <h2 className="text-2xl font-bold">Markdown Format</h2>
        <div className="mt-8 max-w-2xl w-full">
          <div className="flex items-start gap-4">
            <div className="flex items-end gap-1">
              <TextAnimator text={answer.message.content} speed={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
