import PokemonCard from 'components/molecules/PokemonCard';
import { memo } from 'react';
import { PokemonListResponse } from 'types/types';

type PokemonListProps = {
    pokemonItems: PokemonListResponse[] | undefined;
    handleDetailPage: (id: number) => void;
};

const PokemonList = ({ pokemonItems, handleDetailPage }: PokemonListProps) => {
    return (
        <ul className="flex flex-row flex-wrap w-3/5 gap-4 justify-betwee mt-4">
            {pokemonItems?.map((el) => {
                return el.results.map((item, idx) => (
                    <PokemonCard key={`${idx}${item.name}`} item={item} handleDetailPage={handleDetailPage} />
                ));
            })}
        </ul>
    );
};

export default memo(PokemonList);
