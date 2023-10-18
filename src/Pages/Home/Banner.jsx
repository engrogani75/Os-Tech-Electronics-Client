

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hRBs6S5/car4.jpg" className="w-11/12 mx-auto h-[600px] object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/5TtFpkQ/car3.jpg" className="w-11/12 mx-auto h-[600px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/23k502K/car2.jpg" className="w-11/12 mx-auto h-[600px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/YtVQzLt/car-1.jpg" className="w-11/12 mx-auto h-[600px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;