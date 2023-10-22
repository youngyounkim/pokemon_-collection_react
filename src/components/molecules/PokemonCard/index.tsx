import { PokemonListItemType } from 'types/types';

type PokemonCardProps = {
    item: PokemonListItemType;
};

const PokemonCard = ({ item }: PokemonCardProps) => {
    return (
        <li>
            <h3>{item.krName ? item.krName : item.name}</h3>
            {item.id && (
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                    alt={`${item.krName ? item.krName : item.name}의 이미지`}
                />
            )}
        </li>
    );
};

export default PokemonCard;
