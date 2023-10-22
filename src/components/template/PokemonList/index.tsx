import PokemonCard from 'components/molecules/PokemonCard';
import { PokemonResult } from 'types/types';

type ButtonProps = {
    pokemonItems: PokemonResult[] | undefined;
};

const PokemonList = ({ pokemonItems }: ButtonProps) => {
    return (
        <ul>
            {pokemonItems?.map((el) => {
                return el.results.map((item, idx) => <PokemonCard key={`${idx}${item.name}`} item={item} />);
            })}
        </ul>
    );
};

export default PokemonList;
