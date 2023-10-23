import { PokemonListItemType } from 'types/types';
import { Pokemon } from 'pokenode-ts';

type PokemonInfoCardProps = {
    pokemonDetailData: Pokemon;
};

const PokemonInfoCard = ({ pokemonDetailData }: PokemonInfoCardProps) => {
    return (
        <>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetailData.id}.png`}
                alt={`${pokemonDetailData.name}의 이미지`}
            />

            <h2>{pokemonDetailData.name}</h2>
            <p>무게 :{pokemonDetailData.weight / 10}kg</p>
            <p>키 :{pokemonDetailData.height / 10}m</p>
            <p>도감 ID :{pokemonDetailData.id}</p>
        </>
    );
};

export default PokemonInfoCard;
