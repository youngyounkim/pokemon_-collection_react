import { useNavigate, useParams } from 'react-router-dom';
import useGetPokemonDetail from 'models/useGetPokemonDetail';
import useGetEvolutionChain from 'models/useGetEvolutionChain';
import PokemonInfo from 'components/template/PokemonInfo';
import { memo, useCallback } from 'react';

const Detail = () => {
    const navigation = useNavigate();
    const param = useParams();

    const {
        data: pokemonDetailData,
        isLoading: isDetailLoading,
        isError: isDetailError
    } = useGetPokemonDetail(param.id);

    const {
        data: evolutionList,
        isLoading: isEvolutionLoading,
        isError: isEvolutionError
    } = useGetEvolutionChain(param.id);

    const handleDetailPage = useCallback(
        (id: number) => {
            navigation(`/detail/${id}`);
        },
        [navigation]
    );

    return (
        <main className="w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mt-16 text-yellow-400">포켓몬 상세 정보</h1>
            {isDetailError || isEvolutionError ? (
                <p>문제가 발생했습니다. 잠시 후에 다시 시도해주세요</p>
            ) : isDetailLoading && isEvolutionLoading ? (
                <p>잠시만 기다려주세요</p>
            ) : (
                <PokemonInfo
                    pokemonDetailData={pokemonDetailData}
                    evolutionList={evolutionList?.filter((el) => el.id !== Number(param.id))}
                    handleDetailPage={handleDetailPage}
                />
            )}
        </main>
    );
};

export default memo(Detail);
