// eslint-disable-next-line no-unused-vars
import React from 'react'
import Banner from './Banner'
import FavoriteBooks from '../Pages/Shop/Home/FavoriteBooks'
import FavBook from '../Pages/Shop/Home/FavBook'
import PromoBanner from '../Pages/Shop/Home/PromoBanner'
import OtherBooks from '../Pages/Shop/Home/OtherBook'
import Reviews from '../Pages/Shop/Home/Reviews'

const Home = () => {
  return (
   <><Banner />
   <FavoriteBooks />
   <FavBook />
   <PromoBanner />
   <OtherBooks />
   <Reviews />
   </>

  )
}

export default Home
