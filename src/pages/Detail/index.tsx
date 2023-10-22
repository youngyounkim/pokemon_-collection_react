import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetPokemonDetail from 'models/useGetPokemonDetail';

const Detail = () => {
    const navigation = useNavigate();
    const param = useParams();

    const { data } = useGetPokemonDetail(param.id);

    console.log('param', param);
    return <div className="">디테일 페이지</div>;
};

export default Detail;
