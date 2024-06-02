import { EllipsisWave } from '../EllipsisWave';
import { ResponseWrapper } from '../ResponseWrapper';

export const ResponseLoading = () => {
  return (
    <ResponseWrapper>
      <span className="text-zinc-400 ">EasyMath is thinking</span>
      <EllipsisWave className="mb-1" />
    </ResponseWrapper>
  );
};
