/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';

const Shop = () =>
{
  const [ books, setBooks ] = useState( [] );

  useEffect( () =>
  {
    fetch( "http://localhost:3000/books" )
      .then( ( res ) => res.json() )
      .then( ( data ) => setBooks( data ) ); // Update state with fetched data
  }, [] );

  return (
    <div className='mt-28 h px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Books Are Here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map( ( book ) => (
          <Card key={book.id}>
            <img className='h-96' src={book.imageURL} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className='font-normal text-2xl dark:text-gray-400'>
              {book.category}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.bookDescription}
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded '>Buy Now</button>
          </Card>
        ) )}
      </div>
    </div>
  );
};

export default Shop;