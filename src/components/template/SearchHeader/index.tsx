import Input from 'components/atoms/input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import useGetSearchList from 'hooks/useGetSearchList';
import { useEffect, useRef, useState } from 'react';
import SearchList from '../SearchList';

const schema = yup
    .object({
        searchWord: yup.string()
    })
    .required();

const SearchHeader = () => {
    const navigation = useNavigate();
    const { getSearchList, searchList } = useGetSearchList();
    const ref = useRef<HTMLHeadElement>(null);
    const [isOpenSearchList, setIsOpenSearchList] = useState<boolean>(false);
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const { searchWord } = watch();

    useEffect(() => {
        if (searchWord) {
            getSearchList(searchWord);
        }
    }, [searchWord, getSearchList]);

    const onSubmit = () => {
        // 검색어와 제일 맞는 아이템은 0번째 index에 있으므로 해당 아이템으로 검색
        let searchId = searchList[0].id;
        navigation(`/detail/${searchId}`);
    };

    const handleRoutePage = (id?: number) => {
        navigation(`/detail/${id}`);
    };

    const onFocus = () => {
        setIsOpenSearchList(true);
    };

    useEffect(() => {
        const handleOutsideClose = (e: { target: any }) => {
            // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
            if (isOpenSearchList && ref.current !== null && !ref.current.contains(e.target)) setIsOpenSearchList(false);
        };
        document.addEventListener('click', handleOutsideClose);

        return () => document.removeEventListener('click', handleOutsideClose);
    }, [setIsOpenSearchList, isOpenSearchList]);

    return (
        <header className="flex flex-col justify-center" ref={ref}>
            <img src="./pokemon_Logo.png" alt="포켓몬 로고" />
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="searchWord"
                    control={control}
                    errorField={errors}
                    placeholder="search word"
                    onFocus={onFocus}
                />
            </form>
            {isOpenSearchList && <SearchList searchList={searchList} handleRoutePage={handleRoutePage} />}
        </header>
    );
};

export default SearchHeader;
