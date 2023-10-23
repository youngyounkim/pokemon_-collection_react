import { pokemonListState, PokemonListStateType } from 'lib/recoil/pokemonListState';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

const useGetSearchList = () => {
    const pokemonList = useRecoilValue(pokemonListState);
    const [searchList, setSearchList] = useState<PokemonListStateType[]>([]);

    const getSearchList = (keyWord: string | undefined) => {
        if (typeof Number(keyWord) === 'number' && !isNaN(Number(keyWord))) {
            const result = pokemonList.filter((item) => String(item.id).indexOf(String(keyWord)) !== -1);
            setSearchList(result.slice(0, 10));
        } else if (typeof keyWord === 'string') {
            const result = pokemonList.filter((item) => String(item.name).indexOf(String(keyWord)) !== -1);
            setSearchList(result.slice(0, 10));
        }
    };

    return { getSearchList, searchList };
};

export default useGetSearchList;
