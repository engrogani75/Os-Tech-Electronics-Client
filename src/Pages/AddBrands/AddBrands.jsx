


const AddBrands = () => {

 

    const addBrandHadle = (event) => {
        event.preventDefault()
        const form = event.target;
        const image = form.photo.value;
        const brandName = form.brandName.value;
        const brands = {image, brandName}

    
   

         fetch('https://technology-electtronics-brandshop-serverside-project-f0cv0tmg7.vercel.app/brands', {
  
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(brands)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if (data.insertedId) {
        alert('the product added successfully')
        form.reset()
      }
    })
  }
    


    return (
        <div>
                       <div className="hero min-h-screen bg-base-200">
    <div className="hero-content lg:w-[800px] flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Add Brand</h1>
      </div>
      <div className="card flex-shrink-0  lg:w-[100%] shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={addBrandHadle}>


          <div className="form-control">
            <label className="label">
              <span className="label-text"> BRand Image</span>
            </label>
            <input type="text" placeholder="Image Url" name="photo" className="input input-bordered" required />
          </div>
  
    
        
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input type="text" placeholder="Brand Name" name="brandName" className="input input-bordered" required />
          </div>
     
  
  
  
    
          <div className="form-control mt-6">
            <input type="submit" value='addbrand' className="btn btn-success"/>
          </div>
        </form>
      </div>
    </div>
  </div>
        </div>
    );
};

export default AddBrands;