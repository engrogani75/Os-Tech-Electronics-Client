
import Banner from './Banner';
import Brand from './Brand';
import { useLoaderData } from 'react-router-dom';
import NewArrival from './NewArrival';
import Customer from './Customer';

const Home = () => {
    const brands = useLoaderData()
   
    return (
        <div>
            <Banner></Banner>
            <Brand brands = {brands}></Brand>
            <NewArrival></NewArrival>
            <Customer></Customer>
        </div>
    );
};

export default Home;