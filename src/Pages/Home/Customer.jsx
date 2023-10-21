

const Customer = () => {
    return (
     <>
     <h2 className="text-3xl text-center my-4 font-bold">Happy Clients</h2>
      <div className="my-4 w-11/12 mx-auto grid lg:grid-cols-4 gap-4">
          <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="https://i.ibb.co/NVmHZp1/news2.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Mr Alfredo</h2>
          <p>"I've been shopping with this e-commerce site for years, 
            and they never disappoint. The customer service is top-notch, and the products are always as described. A five-star experience!" </p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="https://i.ibb.co/DwYjkPL/news1.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Mr Clarke</h2>
          <p>This is my go-to place for all things fashion. I love the variety they offer, and the prices are great. Plus, the user-friendly website makes shopping a breeze. </p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="https://i.ibb.co/k57J5ny/news3.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Mr Bradon</h2>
          <p>I was a bit skeptical about ordering online, but this website has won my trust. The order arrived on time, and the product was beautifully packaged. I'm a happy customer.</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="https://i.ibb.co/X4gSqZg/news5.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Mr Smith</h2>
          <p>I recently ordered a gift for my friend from this site. The personalized options were fantastic, and the recipient was overjoyed. Thank you for making me look good</p>
        </div>
      </div>


      </div>
     </>
    );
};

export default Customer;