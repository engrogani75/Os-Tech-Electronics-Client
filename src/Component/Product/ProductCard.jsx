import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

    const {_id, image, name, brandName, type, price, shortDescription, rating} = product
    return (
        <div>
            <div className="card justify-center items-center bg-base-100 shadow-xl">
  <figure><img src={image} className='h-72 w-72 object-cover' alt="Movie"/></figure>
  <div className="flex flex-col justify-center items-center">
    <h2 className="card-title mt-3">{name}</h2>
    <p className="mt-1">{brandName}</p>
    <p className="text-purple-700 mt-4">{type}</p>
    <p className="text-red-700 font-bold mt-2">{price}</p>
    <p className='text-red-700 mb-4'>{rating}</p>
    <button className="mt-2 btn"><Link to={`/details/${_id}`}>Details</Link></button>
    <button className=" mt-4 btn bg-orange-800">Update</button>
  </div>
</div>
        </div>
    );
};
ProductCard.propTypes ={
  product: PropTypes.array
}
export default ProductCard;