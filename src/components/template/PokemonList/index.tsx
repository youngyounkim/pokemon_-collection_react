import PokemonCard from 'components/molecules/PokemonCard';
import { PokemonListResponse } from 'types/types';

type ButtonProps = {
    pokemonItems: PokemonListResponse[] | undefined;
    handleDetailPage: (id: number) => void;
};

const PokemonList = ({ pokemonItems, handleDetailPage }: ButtonProps) => {
    return (
        <ul>
            {pokemonItems?.map((el) => {
                return el.results.map((item, idx) => (
                    <PokemonCard key={`${idx}${item.name}`} item={item} handleDetailPage={handleDetailPage} />
                ));
            })}
        </ul>
    );
};

export default PokemonList;
