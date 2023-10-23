import PokemonCard from 'components/molecules/PokemonCard';
import { EvolutionListType } from 'types/types';
import { Pokemon } from 'pokenode-ts';
import PokemonInfoCard from 'components/molecules/PokemonInfoCard';

type PokemonInfoProps = {
    pokemonDetailData: Pokemon | undefined;
    evolutionList: EvolutionListType | undefined;
    handleDetailPage: (id: number) => void;
};

const PokemonInfo = ({ pokemonDetailData, evolutionList, handleDetailPage }: PokemonInfoProps) => {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mt-16 text-yellow-400">포켓몬 상세 정보</h1>
            {pokemonDetailData && <PokemonInfoCard pokemonDetailData={pokemonDetailData} />}
            <p className="my-4 text-xl font-bold">진화 정보</p>
            <ul className="w-[500px] flex flex-wrap gap-3 justify-center">
                {evolutionList &&
                    evolutionList.map((el, idx) => (
                        <PokemonCard key={`${idx}${el.name}`} handleDetailPage={handleDetailPage} item={el} />
                    ))}
            </ul>
        </section>
    );
};

export default PokemonInfo;
