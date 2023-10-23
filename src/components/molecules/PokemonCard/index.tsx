import { PokemonListItemType } from 'types/types';

type PokemonCardProps = {
    item: Omit<PokemonListItemType, 'url'>;
    handleDetailPage: (id: number) => void;
};

const PokemonCard = ({ item, handleDetailPage }: PokemonCardProps) => {
    return (
        <li
            onClick={() => {
                if (item.id) handleDetailPage(item.id);
            }}
        >
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
