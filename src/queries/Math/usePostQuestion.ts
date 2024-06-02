import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { sendQuestionApi } from '@/configs/apis';

import { createResponseWrapper } from '../helpers';
import { SendQuestionPayload } from './types';

export const usePostQuestion = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: UseMutationOptions<any, Error, SendQuestionPayload>,
) => {
  const { mutate: sendQuestion, isPending: isLoading } = useMutation({
    mutationFn: (payload) => createResponseWrapper(sendQuestionApi, [payload]),
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('Error send question:', error);
    },
    ...options,
  });

  return { sendQuestion, isLoading };
};
