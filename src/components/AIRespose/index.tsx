import { AILogo } from '@/configs';

import { EllipsisWave } from '../EllipsisWave';

export const AIResponse = () => {
  return (
    <div className="mt-28 flex items-start gap-4">
      <AILogo className="flex shrink-0" />
      <div className="flex items-end gap-1">
        <span className="text-zinc-400 ">EasyMath is thinking</span>

        <EllipsisWave className="mb-1" />

        {/* <TextAnimator
          text="To solve the expression \\( 4 + 2 \\div 2 + 1 \\), we need to follow the order of operations (PEMDAS/BODMAS):\n\nP/B: Parentheses/Brackets first  \nE/O: Exponents/Orders (i.e., powers and square roots, etc.)  \nMD/DM: Multiplication and Division (left-to-right)  \nAS: Addition and Subtraction (left-to-right)  \n\nLet's solve it step by step:\n\n1. First, perform the division:\n\\[ 4 + (2 \\div 2) + 1 \\]\n\\[ 4 + 1 + 1 \\]\n\n2. Next, perform the addition from left to right:\n\\[ (4 + 1) + 1 \\]\n\\[ 5 + 1 \\]\n\\[ 6 \\]\n\nSo, the final answer is 6."
          speed={30}
        /> */}
      </div>
    </div>
  );
};
