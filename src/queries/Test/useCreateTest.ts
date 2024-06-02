import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { createTestApi } from '@/configs/apis';

import { createResponseWrapper } from '../helpers';

export const useCreateTest = (options?: UseMutationOptions) => {
  const { mutate: createTest, isPending: isLoading } = useMutation({
    mutationFn: (payload) => createResponseWrapper(createTestApi, payload),
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('Error creating test:', error);
    },
    ...options,
  });

  return { createTest, isLoading };
};
