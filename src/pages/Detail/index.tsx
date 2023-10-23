import { useNavigate, useParams } from 'react-router-dom';
import useGetPokemonDetail from 'models/useGetPokemonDetail';
import useGetEvolutionChain from 'models/useGetEvolutionChain';

const Detail = () => {
    const navigation = useNavigate();
    const param = useParams();

    const { data: pokemonDetail } = useGetPokemonDetail(param.id);
    const { data: evolutionList } = useGetEvolutionChain(param.id);

    return <div className="">디테일 페이지</div>;
};

export default Detail;
