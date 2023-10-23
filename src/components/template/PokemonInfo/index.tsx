import PokemonCard from 'components/molecules/PokemonCard';
import { EvolutionListType } from 'types/types';
import { Pokemon } from 'pokenode-ts';
import PokemonInfoCard from 'components/molecules/PokemonInfoCard';
import { memo } from 'react';

type PokemonInfoProps = {
    pokemonDetailData: Pokemon | undefined;
    evolutionList: EvolutionListType | undefined;
    handleDetailPage: (id: number) => void;
};

const PokemonInfo = ({ pokemonDetailData, evolutionList, handleDetailPage }: PokemonInfoProps) => {
    return (
        <section className="flex flex-col justify-center items-center mb-4">
            {pokemonDetailData && <PokemonInfoCard pokemonDetailData={pokemonDetailData} />}
            <h2 className="my-4 text-xl font-bold">진화 정보</h2>
            <ul className="w-[500px] flex flex-wrap gap-3 justify-center">
                {evolutionList &&
                    evolutionList.map((el, idx) => (
                        <PokemonCard key={`${idx}${el.name}`} handleDetailPage={handleDetailPage} item={el} />
                    ))}
            </ul>
        </section>
    );
};

export default memo(PokemonInfo);
