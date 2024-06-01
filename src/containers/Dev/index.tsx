import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { useGetTest } from '@/queries';

export const DevContainer = () => {
  const [isEnableTest, setIsEnableTest] = useState(false);

  const { test, isLoading } = useGetTest({
    enabled: isEnableTest,
  });

  const handleClickTest = () => {
    setIsEnableTest(true);
  };

  // eslint-disable-next-line no-console
  console.log('test data', test);

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
    </div>
  );
};
