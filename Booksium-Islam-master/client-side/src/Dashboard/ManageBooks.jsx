/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';

const ManageBooks = () =>
{
  
  const [ allBooks, setAllBooks ] = useState( [] )
  
  useEffect( () =>
  {
    fetch( "http://localhost:3000/books" )
      .then( ( res ) => res.json() )
      .then( ( data ) => setAllBooks( data ) ); // Update state with fetched data
  }, [] );

  // delete the book
  const handelDelete = ( id ) =>
  {
    fetch( `http://localhost:3000/book/${ id } `,
      {
        method: 'DELETE'
      })
      .then( ( res ) => res.json() )
      .then( ( data ) =>
      {
        alert( "Book is Deleted Successfully!" )
        setAllBooks(data)
      } );
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>    

      {/* table for book data */}
      <div className="overflow-x-auto">
        <Table className='lg:w-[1180px]' hoverable>
          <Table.Head>
            <Table.HeadCell>NO</Table.HeadCell>
            <Table.HeadCell>Book name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Prices</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit Or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          {
            
            allBooks.map( ( book, index ) => <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>
                  {book.authorName}
                </Table.Cell>
                <Table.Cell>
                  {book.category}
                </Table.Cell>
                <Table.Cell>
                  $10.00
                </Table.Cell>
                <Table.Cell>
                  <a href={`/admin/dashboard/edit-books/${ book._id }`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                    Edit
                  </a>
                  <button onClick={() => handelDelete(book._id)}
                  className='bg-red-600 px-4 py-1 font-semibold text-white rounded-lg
                  hover:bg-sky-600'>Delete</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            )
          }
          
            
        </Table>
      </div>
    </div>
  )
}

export default ManageBooks