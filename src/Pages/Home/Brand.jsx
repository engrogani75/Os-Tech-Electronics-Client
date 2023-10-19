import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({brands}) => {
    console.log(brands);
    return (
       
          <>
          <h2 className='text-center text-2xl font-bold my-6 underline'>Our Brands</h2>
              <div className='grid  lg:grid-cols-3 mx-auto w-11/12 gap-3 items-center'>
      
      {
      brands.map(item => 
    <Link to={`products/${item.brandName}`} key={item._id}>  <div  className="card bg-base-100 shadow-xl cursor-pointer">
    <figure>
      <img className='h-52 w-full object-cover'
        src={item.image}
        alt={item.brandName}
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{item.brandName}</h2>
    </div>
  </div></Link>
    
    )
      
      }

      
    </div></>
    );
};


Brand.propTypes ={
    brands: PropTypes.array
}

export default Brand;