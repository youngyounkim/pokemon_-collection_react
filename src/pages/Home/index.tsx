import PokemonList from 'components/template/PokemonList';
import useGetPokemonNames from 'models/useGetPokemonNames';
import useGetPokemonList from 'models/useGetPokemonList';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import SearchHeader from 'components/template/SearchHeader';

const Home = () => {
    const navigation = useNavigate();
    const { pokemonList } = useGetPokemonNames();
    const {
        data: pokemonItems,
        fetchNextPage,
        isFetching,
        isFetchingNextPage,
        isError
    } = useGetPokemonList(pokemonList);

    const handleDetailPage = (id: number) => {
        navigation(`/detail/${id}`);
    };

    const targetRef = useRef<HTMLDivElement>(null);

    const options = useCallback(() => {
        return {
            threshold: 1.0
        };
    }, []);

    const callback = useCallback(() => {
        fetchNextPage();
    }, [fetchNextPage]);

    const observer = useMemo(() => new IntersectionObserver(callback, options()), [callback, options]);

    useEffect(() => {
        if (targetRef.current) observer.observe(targetRef.current);
    }, [observer]);

    return (
        <main className="w-full flex flex-col justify-center items-center">
            <SearchHeader />
            {isError ? (
                <p>문제가 발생했습니다. 잠시후 다시 시도해주세요</p>
            ) : (
                <PokemonList pokemonItems={pokemonItems?.pages} handleDetailPage={handleDetailPage} />
            )}
            <div ref={targetRef} />
            {(isFetching || isFetchingNextPage) && <p>잠시만 기다려주세요</p>}
        </main>
    );
};

export default Home;
