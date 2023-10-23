// useQueres 사용해서 배열 받으면 배열 반복문 돌면서 가져온 데이터 매핑해서 디테일한 테이터로 전달하게 하자!
import { getApi } from 'lib/axios';
import { pokemonKey } from 'lib/queryKeyFactory';
import { useQuery } from 'react-query';
import { EvolutionChain, ChainLink } from 'pokenode-ts';
import { useRecoilValue } from 'recoil';
import { namesState } from 'lib/recoil/namesState';
import { getId } from 'util/utilFn';

type EvolutionListType = {
    name: string;
    id: number;
}[];

const useGetEvolutionChain = (id: string | undefined) => {
    const pokemonNames = useRecoilValue(namesState);
    const evolutionUrl = pokemonNames.find((names) => names.id === Number(id))?.evolutionUrl;

    const chainId = getId(evolutionUrl);

    const getIdAndName = (name: string, url: string) => {
        return { name, id: getId(url) };
    };

    const { data } = useQuery<EvolutionChain, Error, EvolutionListType>(
        pokemonKey.evolutionChain(chainId),
        () => getApi(`/evolution-chain/${chainId}`).then((data) => data.data),
        {
            enabled: chainId !== 0 && !isNaN(chainId),
            select: (data) => {
                const result: EvolutionListType = [];

                const getEvolutionArr = (data: ChainLink): any => {
                    // ChainLink의 타입이 재귀형태로 반복되어 evolves_to 배열의 크기가 0일 때 까지 반복하여 진화 단계를 찾음
                    const idAndName = getIdAndName(data.species.name, data.species.url);
                    result.push(idAndName);
                    if (data.evolves_to.length === 0) {
                        return;
                    }
                    for (let index = 0; index < data.evolves_to.length; index++) {
                        getEvolutionArr(data.evolves_to[index]);
                    }
                };
                getEvolutionArr(data.chain);
                return result;
            }
        }
    );
    return { data };
};

export default useGetEvolutionChain;
