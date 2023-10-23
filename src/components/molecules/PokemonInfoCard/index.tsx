import { PokemonListItemType } from 'types/types';
import { Pokemon } from 'pokenode-ts';

type PokemonInfoCardProps = {
    pokemonDetailData: Pokemon;
};

const PokemonInfoCard = ({ pokemonDetailData }: PokemonInfoCardProps) => {
    return (
        <div className="flex flex-col items-center gap-1">
            <img
                className="mt-12"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetailData.id}.png`}
                alt={`${pokemonDetailData.name}의 이미지`}
            />

            <h2 className="text-lg font-bold">{pokemonDetailData.name}</h2>
            <p>무게 :{pokemonDetailData.weight / 10}kg</p>
            <p>키 :{pokemonDetailData.height / 10}m</p>
            <p>도감 ID :{pokemonDetailData.id}</p>
        </div>
    );
};

export default PokemonInfoCard;
