
import Banner from './Banner';
import Brand from './Brand';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const brands = useLoaderData()
   
    return (
        <div>
            <Banner></Banner>
            <Brand brands = {brands}></Brand>
        </div>
    );
};

export default Home;