import PokemonList from 'components/template/PokemonList';
import useGetPokemonNames from 'models/useGetPokemonNames';
import useGetPokemonList from 'models/useGetPokemonList';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef } from 'react';

const Home = () => {
    const navigation = useNavigate();
    const { nameList } = useGetPokemonNames();
    const { data: pokemonItems, fetchNextPage } = useGetPokemonList(nameList);

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
        <main className="">
            <PokemonList pokemonItems={pokemonItems?.pages} handleDetailPage={handleDetailPage} />
            <div ref={targetRef} />
        </main>
    );
};

export default Home;
