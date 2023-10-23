import { memo } from 'react';

type ButtonProps = {
    onClick: () => void;
    title: string;
};

const Button = ({ onClick, title }: ButtonProps) => {
    return (
        <button className={`flex w-full items-center justify-center hover:bg-gray-500 rounded-md`} onClick={onClick}>
            <p>{title}</p>
        </button>
    );
};

export default memo(Button);
