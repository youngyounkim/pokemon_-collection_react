import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';
import { pokemonKey } from 'lib/queryKeyFactory';
import { AxiosResponse } from 'axios';
import { ModelType, PokemonResult } from 'types/types';
import { getApi } from 'lib/axios';

const useGetPokemons = () => {
    const { data } = useInfiniteQuery<AxiosResponse, Error, PokemonResult>(
        pokemonKey.pokemonListKey(),
        ({ pageParam }) => getApi(`/pokemon/?limit=20&offset=${pageParam}`).then((data) => data.data),
        {
            getNextPageParam: (lastPage, page) => {
                const { next }: any = lastPage;
                if (!next) return undefined;
                return Number(new URL(next).searchParams.get('offset'));
            }
        }
    );
    return { data };
};

export default useGetPokemons;
