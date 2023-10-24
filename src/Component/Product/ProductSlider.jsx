import PropTypes from 'prop-types';

const ProductSlider = ({product}) => {




const imgUrl = product[0]?.image
const imgUrl2 =  product[1]?.image
const imgUrl3 =  product[2]?.image
const imgUrl4 =  product[3]?.image


    return (
      
         <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={imgUrl3 } className="w-11/12 mx-auto h-[600px] object-cover" />
    <div className="absolute flex justify-between transform  left-0 lg:left-16 right-0 lg:right-16 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
   <div className='absolute transform -translate-y-1/2 left-[25%] md:left-[30%] lg:left-[40%] top-1/2'>
   <h1 className='md:text-5xl text-red-800 font-bold italic'>Winter Mega offer</h1>
    <p className='md:text-3xl font-extrabold text-red-900'>{product[2]?.name.slice(30)} up to 50% Dicount</p>
   </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={imgUrl2}  className="w-11/12 mx-auto h-[600px] object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-0  lg:left-16 right-0 lg:right-16 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute transform -translate-y-1/2 left-[25%] md:left-[30%] lg:left-[40%] top-1/2'>
   <h1 className='md:text-5xl text-red-800 font-bold italic'>Winter Mega offer</h1>
    <p className='md:text-3xl font-extrabold text-red-900'>{product[1]?.name.slice(30)} up to 50% Dicount</p>
   </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={imgUrl4} className="w-11/12 mx-auto h-[600px] object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 lg:left-16 right-0 lg:right-16 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute transform -translate-y-1/2 left-[25%] md:left-[30%] lg:left-[40%] top-1/2'>
   <h1 className='md:text-5xl text-red-800 font-bold italic'>Winter Mega offer</h1>
    <p className='md:text-3xl font-extrabold text-red-900'>{product[3]?.name.slice(30)} up to 50% Dicount</p>
   </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={imgUrl}  className="w-11/12 mx-auto h-[600px] object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 lg:left-16 right-0 lg:right-16 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute transform -translate-y-1/2 left-[25%] md:left-[30%] lg:left-[40%] top-1/2'>
   <h1 className='md:text-5xl text-red-800 font-bold italic'>Winter Mega offer</h1>
    <p className='md:text-3xl font-extrabold text-red-900'>{product[0]?.name.slice(30)} up to 50% Dicount</p>
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