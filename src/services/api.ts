import clientRequest from './queryClient';

export default {
  auth: {
    login(data: any) {
      const path: string = '/login';
      return clientRequest('POST', path, data);
    },
  },
};
