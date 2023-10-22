import PokemonList from 'components/template/PokemonList';
import useGetPokemonNames from 'models/useGetPokemonNames';
import useGetPokemonList from 'models/useGetPokemonList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigate();
    const { nameList } = useGetPokemonNames();
    const { data: pokemonItems, fetchNextPage } = useGetPokemonList(nameList);

    const handleDetailPage = (id: number) => {
        navigation(`/detail/${id}`);
    };

    return (
        <div className="">
            <PokemonList pokemonItems={pokemonItems?.pages} handleDetailPage={handleDetailPage} />
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
