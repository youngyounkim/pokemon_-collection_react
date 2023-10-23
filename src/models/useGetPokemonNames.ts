// useQueres 사용해서 배열 받으면 배열 반복문 돌면서 가져온 데이터 매핑해서 디테일한 테이터로 전달하게 하자!
import { useQueries, UseQueryOptions } from 'react-query';
import { pokemonKey } from 'lib/queryKeyFactory';
import { PokemonSpecies } from 'pokenode-ts';
import { getApi } from 'lib/axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { namesState } from 'lib/recoil/namesState';

const useGetPokemonNames = () => {
    const [nameList, setNameList] = useRecoilState(namesState);

    // 포켓몬 도감상 존재하는 포켓몬들의 수 만큼 queryFn과 key값을 만드는 함수
    const getQueries = () => {
        const result = [];
        for (let index = 1; index <= 1017; index++) {
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

    const speciesData = useQueries<UseQueryOptions<PokemonSpecies, Error>[]>(PokemonNameList);

    useEffect(() => {
        if (speciesData[1016] && speciesData[1016].status === 'success' && nameList.length === 0) {
            const nameArr = speciesData.map((el) => {
                return {
                    id: el.data?.id,
                    name: el.data?.names[2].name,
                    evolutionUrl: el.data?.evolution_chain.url
                };
            });
            setNameList(nameArr);
        }
    }, [speciesData, setNameList, nameList.length]);

    return { nameList };
};

export default useGetPokemonNames;
