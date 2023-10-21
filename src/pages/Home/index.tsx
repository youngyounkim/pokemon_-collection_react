import useGetPokemons from 'models/useGetPokemons';

const Home = () => {
    const data = useGetPokemons();
    return <div className="">base</div>;
};

export default Home;
