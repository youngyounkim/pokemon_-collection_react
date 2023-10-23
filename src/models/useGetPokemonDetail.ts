import { getApi } from 'lib/axios';
import { pokemonKey } from 'lib/queryKeyFactory';
import { useQuery } from 'react-query';
import { Pokemon } from 'pokenode-ts';
import { AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';
import { pokemonListState } from 'lib/recoil/pokemonListState';

const useGetPokemonDetail = (id: number | string = 0) => {
    const pokemonList = useRecoilValue(pokemonListState);

    const { data, isLoading, isError } = useQuery<AxiosResponse<Pokemon>, Error, Pokemon>(
        pokemonKey.pokemonDetail(id),
        () => getApi(`/pokemon/${id}`),
        {
            select: (data) => {
                const result = { ...data.data };
                const krName = pokemonList.find((item) => item.id === Number(id))?.name;
                if (krName) {
                    result.name = krName;
                }
                return result;
            }
        }
    );

    return { data, isLoading, isError };
};

export default useGetPokemonDetail;
