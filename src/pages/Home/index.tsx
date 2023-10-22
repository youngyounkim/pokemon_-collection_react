import PokemonList from 'components/template/PokemonList';
import useGetPokemonNames from 'models/useGetPokemonNames';
import useGetPokemonList from 'models/useGetPokemonList';

const Home = () => {
    const { nameList } = useGetPokemonNames();
    const { data: pokemonItems, fetchNextPage } = useGetPokemonList(nameList);

    return (
        <div className="">
            <PokemonList pokemonItems={pokemonItems?.pages} />
            <button
                onClick={() => {
                    fetchNextPage();
                }}
            >
                다음 페이지
            </button>
        </div>
    );
};

export default Home;
