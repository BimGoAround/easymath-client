import { ResponseWrapper } from '../ResponseWrapper';
import { TextAnimator } from '../TextAnimator';

type AIResponseProps = {
  answer: string;
};

export const AIResponse = ({ answer }: AIResponseProps) => {
  return (
    <ResponseWrapper>
      <TextAnimator text={answer} speed={30} />
    </ResponseWrapper>
  );
};
