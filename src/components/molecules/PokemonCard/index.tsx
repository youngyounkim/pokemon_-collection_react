import { PokemonListItemType } from 'types/types';

type PokemonCardProps = {
    item: Omit<PokemonListItemType, 'url'>;
    handleDetailPage: (id: number) => void;
};

const PokemonCard = ({ item, handleDetailPage }: PokemonCardProps) => {
    return (
        <li
            className="w-[30%] border rounded-md border-stone-100 flex flex-col justify-center items-center p-4 cursor-pointer hover:bg-slate-100"
            onClick={() => {
                if (item.id) handleDetailPage(item.id);
            }}
        >
            {item.id && (
                <img
                    className="min-w-[80px]"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                    alt={`${item.krName ? item.krName : item.name}의 이미지`}
                />
            )}
            <h3 className=" text-lg text-zinc-800">{item.krName ? item.krName : item.name}</h3>
        </li>
    );
};

export default PokemonCard;
