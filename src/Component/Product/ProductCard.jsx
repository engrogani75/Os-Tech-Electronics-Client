

const ProductCard = ({product}) => {

    const {image, name, brandName, type, price, shortDescription, rating} = product
    return (
        <div>
            <div className="card w-[50%] card-side bg-base-100 shadow-xl">
  <figure><img src={image} className="w-[25%]" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;