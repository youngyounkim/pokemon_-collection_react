import { useInfiniteQuery, InfiniteData } from 'react-query';
import { pokemonKey } from 'lib/queryKeyFactory';
import { PokemonListResponse } from 'types/types';
import { getApi } from 'lib/axios';
import { NamesStateType } from 'lib/recoil/namesState';
import { AxiosResponse } from 'axios';

const useGetPokemonList = (nameList: NamesStateType[]) => {
    const { data, hasPreviousPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery<
        PokemonListResponse,
        Error,
        PokemonListResponse
    >(
        pokemonKey.pokemonListKey(),
        ({ pageParam = 0 }) => getApi(`/pokemon/?limit=30&offset=${pageParam}`).then((data) => data.data),
        {
            enabled: nameList.length !== 0,
            getNextPageParam: (lastPage) => {
                const { next }: any = lastPage;
                if (!next) return undefined;
                return Number(new URL(next).searchParams.get('offset'));
            },
            select: (data) => {
                return {
                    ...data,
                    pages: data.pages.map((el) => {
                        return {
                            ...el,
                            results: el.results.map((el) => {
                                const url = el.url.split('/');
                                const nameData = nameList.find((item) => item.id === Number(url[6]));
                                return { ...el, krName: nameData?.name, id: nameData?.id };
                            })
                        };
                    })
                };
            }
        }
    );

    return { data, hasPreviousPage, fetchNextPage, isFetching, isFetchingNextPage };
};

export default useGetPokemonList;
