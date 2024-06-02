import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { uploadFileApi } from '@/configs/apis';

import { createResponseWrapper } from '../helpers';

export const useUploadFile = (options?: UseMutationOptions) => {
  const { mutate: uploadFile, isPending: isLoading } = useMutation({
    mutationFn: (payload) => createResponseWrapper(uploadFileApi, [payload]),
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('Error creating test:', error);
    },
    ...options,
  });

  return { uploadFile, isLoading };
};
