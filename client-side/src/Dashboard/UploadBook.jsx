/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Alert, Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';


const UploadBook = () => {
  const bookcategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantesy",
    "Horror",
    "bibiography",
    "Autobiography",
    "History",
    "Self-help",
    "Memior",
    "Business",
    "Childern Books",
    "Travel",
    "Religion",
    "Art and Design"
  ] 

  const [ selectedBookCategory, setSelectedBookCategory ] = useState( bookcategories[ 0 ] )
  const handelChangeSelectedValue = ( event ) =>
  {
    setSelectedBookCategory( event.target.value );
  }

  // handel book submit
  const handelBooksubmit = ( event ) =>
  {
    event.preventDefault();
    const form = event.target;
    
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const bookobj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl
    }

    // send data to db

    fetch( "http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify( bookobj )
    } ).then( res => res.json() ).then( data =>
    {
      Alert("Book Uploaded successfully!")
    })
    

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>    
      <form onSubmit={handelBooksubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        
        {/* 1st Row */}
        <div className='flex gap-8'>
          {/* bookTitle */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="book name" name='bookTitle' required />
          </div>

          {/* authorName */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="author name" name='authorName' required />
          </div> 
        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          {/* bookImage */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="book image url" name='imageURL' required />
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="inputstate" value="Book Category" />
              </div>
              <select className='w-full rounded' name="categoryName" id="inputstate" required
                value={selectedBookCategory} onChange={handelChangeSelectedValue}>
                {
                  bookcategories.map( ( category ) =>
                    <option key={category} value={category}>{category}</option>
                  )
                }
              </select>
            </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description " />
          </div>
          <Textarea id="bookDescription" name='bookDescription'
            className='w-full'
            type="email"
            placeholder="write your book description"
            rows={4}
            required />
        </div>

        {/* Book Pdf URL */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book Pdf URL" />
          </div>
          <TextInput id="bookPdfUrl" type="text" placeholder="Book Pdf URL" name='bookPdfUrl' required />
        </div>

        <Button type='submit' className='mt-5'>
          Upload Book
        </Button>

      </form>
    </div>
  )
}

export default UploadBook