import { useNavigate, useParams } from 'react-router-dom';
import useGetPokemonDetail from 'models/useGetPokemonDetail';
import useGetEvolutionChain from 'models/useGetEvolutionChain';
import PokemonInfo from 'components/template/PokemonInfo';

const Detail = () => {
    const navigation = useNavigate();
    const param = useParams();

    const { data: pokemonDetailData } = useGetPokemonDetail(param.id);
    const { data: evolutionList } = useGetEvolutionChain(param.id);

    const handleDetailPage = (id: number) => {
        navigation(`/detail/${id}`);
    };

    return (
        <main className="">
            <PokemonInfo
                pokemonDetailData={pokemonDetailData}
                evolutionList={evolutionList}
                handleDetailPage={handleDetailPage}
            />
        </main>
    );
};

export default Detail;
