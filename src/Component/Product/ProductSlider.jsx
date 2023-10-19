import Slider from 'react-touch-drag-slider'

const ProductSlider = ({product}) => {
  console.log(product);
    return (
      
         <Slider
          onSlideComplete={(i) => {
            console.log('finished dragging, current slide is', i)
          }}
          onSlideStart={(i) => {
            console.log('started dragging on slide', i)
          }}
          activeIndex={0}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {
          product.map((item) => 
           
            <img src={item.image} alt="" />
          )
          }


        </Slider>
       
   
 


    );
};

export default ProductSlider;