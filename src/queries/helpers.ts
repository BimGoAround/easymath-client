/* eslint-disable */
type ApiCall = (...args: any[]) => Promise<any>;

export async function responseWrapper<T>(
  func: ApiCall,
  [...args]: any[] = [],
): Promise<T> {
  return new Promise(async (res, rej) => {
    try {
      const response = (await func(...args)) || {};
      if (response.ok) res(response.data);
      if (response?.originalError?.message === 'CONNECTION_TIMEOUT') {
        console.error(
          'Connection timeout. Please check your network and try again.',
        );
      }
      rej(response.data);
    } catch (err) {
      rej(err);
    }
  });
}

export async function createResponseWrapper<T>( 
  func: ApiCall,
  [...args]: any,
): Promise<T> {
  return new Promise(async (res, rej) => {
    try {
      const response = (await func(...args)) || {};
      if (response?.ok) {
        res(response?.data?.data);
      } else {
        const message = response?.data?.message?.map
          ? response?.data?.message?.map((item: string) => item)?.join(', ')
          : response?.data?.message;
        rej({ message });
      }
    } catch (err) {
      rej(err);
    }
  });
}
