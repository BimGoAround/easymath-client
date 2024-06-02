import { create } from 'apisauce';

import {
  GetPropertiesParams,
  SendQuestionPayload,
  UploadFilePayload,
} from '@/queries';

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

const uploadFileApi = (payload: UploadFilePayload) =>
  api.post('/file/upload', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

const sendQuestionApi = (payload: SendQuestionPayload) =>
  api.post('/math', payload, {});

export { api, createTestApi, getTestApi, sendQuestionApi, uploadFileApi };
