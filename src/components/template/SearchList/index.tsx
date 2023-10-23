import SearchCard from 'components/molecules/SearchCard';
import { PokemonListStateType } from 'lib/recoil/pokemonListState';
import { memo } from 'react';

type SearchListProps = {
    searchList: PokemonListStateType[];
    handleRoutePage: (id: number | undefined) => void;
};

const SearchList = ({ searchList, handleRoutePage }: SearchListProps) => {
    return (
        <div className="relative">
            <ul className="absolute bg-slate-50 w-full top-0">
                {searchList.map((el, idx) => (
                    <SearchCard key={`${el.name}${idx}`} handleRoutePage={handleRoutePage} id={el.id} name={el.name} />
                ))}
            </ul>
        </div>
    );
};

export default memo(SearchList);
