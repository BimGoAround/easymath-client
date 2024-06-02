import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { uploadFileApi } from '@/configs/apis';

import { responseNoBody } from '../helpers';
import { UploadFilePayload } from './types';

export const useUploadFile = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: UseMutationOptions<any, Error, UploadFilePayload>,
) => {
  const { mutate: uploadFile, isPending: isLoading } = useMutation({
    mutationFn: (payload: UploadFilePayload) =>
      responseNoBody(uploadFileApi, [payload]),
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('Error upload file:', error);
    },
    ...options,
  });

  return { uploadFile, isLoading };
};
