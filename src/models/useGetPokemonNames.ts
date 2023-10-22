// useQueres 사용해서 배열 받으면 배열 반복문 돌면서 가져온 데이터 매핑해서 디테일한 테이터로 전달하게 하자!
import { useQueries, UseQueryOptions } from 'react-query';
import { pokemonKey } from 'lib/queryKeyFactory';
import { PokemonSpeciesType } from 'types/types';
import { getApi } from 'lib/axios';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { namesState } from 'lib/recoil/namesState';

const useGetPokemonNames = () => {
    const [nameList, setNameList] = useRecoilState(namesState);

    const getQueries = () => {
        const result = [];
        for (let index = 1; index < 1018; index++) {
            result.push({
                queryKey: pokemonKey.pokemonName(index),
                queryFn: () => getApi(`pokemon-species/${index}`).then((data) => data.data),
                staleTime: Infinity,
                suspense: true
            });
        }
        return result;
    };

    const [PokemonNameList] = useState(getQueries());

    const speciesData = useQueries<UseQueryOptions<PokemonSpeciesType, Error>[]>(PokemonNameList);

    useEffect(() => {
        if (speciesData[1016] && speciesData[1016].status === 'success' && nameList.length === 0) {
            const nameArr = speciesData.map((el) => {
                return {
                    id: el.data?.id,
                    name: el.data?.names[2].name
                };
            });
            setNameList(nameArr);
        }
    }, [speciesData, setNameList, nameList.length]);

    return { nameList };
};

export default useGetPokemonNames;
