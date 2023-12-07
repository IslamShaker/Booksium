import BannerCard from "../Pages/Shop/Home/BannerCard"

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className="flex w-ful flex-col md:flex-row justify-between items-center gap-12 py-40">
      {/**elft side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'> BUY AND SELL YOU BOOKS
            <span className="text-blue-700">  FOR THE BEST  PRICE
            </span></h2>
            <p className='md:w-4/5'> Here you are more information. 
            Our store services and command is to ease  the process of finding more books to own .
            Please if you need to search for a specific book ... Write it down here to start searching for it.    </p>
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
