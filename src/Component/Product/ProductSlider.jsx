import PropTypes from 'prop-types';

const ProductSlider = ({product}) => {


const imgUrl = product[0].image;
const imgUrl2 =  product[1].image;


    return (
      
         <div>
                      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={imgUrl } className="w-11/12 mx-auto h-[600px] object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={imgUrl2}  className="w-11/12 mx-auto h-[600px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={imgUrl} className="w-11/12 mx-auto h-[600px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={imgUrl2}  className="w-11/12 mx-auto h-[600px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
         </div>
       
   
 


    );
};


ProductSlider.propTypes ={
  product: PropTypes.array
}

export default ProductSlider;