import { create } from 'apisauce';

import { GetPropertiesParams } from '@/queries';

import { API_BASE_URL } from './constant';

const api = create({
  baseURL: API_BASE_URL,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 0,
    Accept: 'application/json',
  },
});

// get(endpoint, params, axiosConfig)
const getTestApi = (params: GetPropertiesParams) =>
  api.get('/test', params, {});

const createTestApi = (payload: unknown) => api.post('/test', payload, {});

const uploadFileApi = (payload: any) => {
  const data = {
    file: payload,
  };

  return api.post(
    '/file/upload',
    {
      file: 'abc',
    },
    {},
  );
};

export { api, createTestApi, getTestApi, uploadFileApi };
