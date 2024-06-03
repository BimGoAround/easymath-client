import { ResponseWrapper } from '../ResponseWrapper';
import { TextAnimator } from '../TextAnimator';

type AIResponseProps = {
  answer: string;
};

export const AIResponse = ({ answer }: AIResponseProps) => {
  return (
    <ResponseWrapper>
      <TextAnimator className="pb-5" text={answer} speed={30} />
    </ResponseWrapper>
  );
};
