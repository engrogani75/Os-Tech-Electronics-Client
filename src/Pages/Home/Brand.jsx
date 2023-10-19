import PropTypes from 'prop-types';

const Brand = ({brands}) => {
    console.log(brands);
    return (
      <div>
        {
        brands.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={item.image}
            alt={item.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.brandName}</h2>
        </div>
      </div>)
        
        }

        
      </div>
    );
};


Brand.propTypes ={

}

export default Brand;