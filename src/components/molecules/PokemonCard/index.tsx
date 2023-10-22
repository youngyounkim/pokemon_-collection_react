import { PokemonListItemType } from 'types/types';

type PokemonCardProps = {
    item: PokemonListItemType;
};

const PokemonCard = ({ item }: PokemonCardProps) => {
    // const { data } = useGetPokemonDetail(item.name);
    // console.log(data);
    return <li></li>;
};

export default PokemonCard;
