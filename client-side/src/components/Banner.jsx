import BannerCard from "../Pages/Shop/Home/BannerCard"

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className="flex w-ful flex-col md:flex-row justify-between items-center gap-12 py-40">
      {/**elft side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'> Buy and sell Your Books
            <span className="text-blue-700"> for the beast price 

            </span></h2>
            <p className='md:w-4/5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida lectus in est tempus, eget cursus arcu fringilla. Nullam 
            vitae justo at ipsum vehicula vulputate. Curabitur id condimentum justo. Ut eget leo et risus malesuada sollicitudin. In hac habitasse platea dictumst. 
            Quisque vitae sapien quis velit suscipit vehicula vel ut odio. Integer id tortor  </p>
            <div>
              <input type="search" name="search" id="search" placeholder='search a book'
              className='py-2 px-2 rounded-s-sm outline-none' />
              

              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>
                search
              </button>
            </div>
        </div>
        {/** right side  */}
        <div><BannerCard /></div>
       </div>
    </div>
  )
}

export default Banner
