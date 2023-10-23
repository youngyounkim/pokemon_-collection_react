import { memo } from 'react';

type SearchCardProps = {
    handleRoutePage: (id: number | undefined) => void;
    id: number | undefined;
    name: string | undefined;
};

const SearchCard = ({ handleRoutePage, id, name }: SearchCardProps) => {
    return (
        <li
            className="flex gap-2 p-1 px-2 hover:bg-slate-100"
            onClick={() => {
                handleRoutePage(id);
            }}
        >
            <p className="w-[35px]">{id}</p>
            <p>{name}</p>
        </li>
    );
};

export default memo(SearchCard);
