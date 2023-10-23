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
        <section>
            {pokemonDetailData && <PokemonInfoCard pokemonDetailData={pokemonDetailData} />}
            {evolutionList &&
                evolutionList.map((el, idx) => (
                    <PokemonCard key={`${idx}${el.name}`} handleDetailPage={handleDetailPage} item={el} />
                ))}
        </section>
    );
};

export default PokemonInfo;
