import { instance } from './config';

export const getApi = async (url: string, params = {}) => {
    return instance.get(url, { params });
};
