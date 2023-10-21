import axios from 'axios';
import { useQuery } from 'react-query';
import { baseKey } from 'lib/queryKeyFactory';
import { AxiosResponse } from 'axios';
import { ModelType } from 'types/types';

const useGetHooks = () => {
    const { data } = useQuery<AxiosResponse, Error, ModelType[]>(
        baseKey.baseFactory(),
        () => axios.get('/').then((data) => data.data),
        {
            select: (res) => {
                return res.data;
            },
            onError: () => {}
        }
    );
    return { data };
};

export default useGetHooks;
