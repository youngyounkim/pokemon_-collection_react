import { useNavigate, useParams } from 'react-router-dom';
import useGetPokemonDetail from 'models/useGetPokemonDetail';
import useGetEvolutionChain from 'models/useGetEvolutionChain';
import PokemonInfo from 'components/template/PokemonInfo';
import { useCallback } from 'react';

const Detail = () => {
    const navigation = useNavigate();
    const param = useParams();

    const { data: pokemonDetailData } = useGetPokemonDetail(param.id);
    const { data: evolutionList } = useGetEvolutionChain(param.id);

    const handleDetailPage = useCallback(
        (id: number) => {
            navigation(`/detail/${id}`);
        },
        [navigation]
    );

    return (
        <main className="w-full flex flex-col justify-center items-center">
            <PokemonInfo
                pokemonDetailData={pokemonDetailData}
                evolutionList={evolutionList}
                handleDetailPage={handleDetailPage}
            />
        </main>
    );
};

export default Detail;
