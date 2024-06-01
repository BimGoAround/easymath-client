import { useQuery, useQueryClient } from '@tanstack/react-query';

import { testApi } from '@/configs/apis';

import { responseWrapper } from '../helpers';
import { API_QUERIES_KEYS } from '../keys';

export const useGetTest = (options = {}) => {
  const {
    data: test,
    error,
    isError,
    isFetching: isLoading,
  } = useQuery({
    ...options,
    queryKey: [API_QUERIES_KEYS.TEST],
    queryFn: (query) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...params] = query.queryKey;

      return responseWrapper(testApi, params);
    },
  });

  const queryClient = useQueryClient();

  const handleInvalidateTest = () =>
    queryClient.invalidateQueries({
      queryKey: [API_QUERIES_KEYS.TEST],
    });

  return { test, error, isError, isLoading, handleInvalidateTest };
};
