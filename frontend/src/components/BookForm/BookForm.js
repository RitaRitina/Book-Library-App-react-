import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { addBook, fetchBook, selectIsLoadingViaAPI } from '../../redux/slices/booksSlice';
import createBookWidthId from '../../utils/createBookWidthId';
import booksData from '../../data/books.json';
import './BookForm.css';
import { setError } from '../../redux/slices/errorSlice';

const BookForm = () => {
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
	const isLoading = useSelector(selectIsLoadingViaAPI)
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (title && author) {
         dispatch(addBook(createBookWidthId({ title, author }, 'random')));
         setTitle('');
         setAuthor('');
      } else {
         dispatch(setError('You must fill title and author!'));
      }
   };

   const handleAddRandomBook = () => {
      const randomIndex = Math.floor(Math.random() * booksData.length);
      const randomBook = booksData[randomIndex];
      dispatch(addBook(createBookWidthId(randomBook, 'manual')));
   };

   const handleAddRandomViaAPI = () => {
      dispatch(fetchBook('http://localhost:4000/random-book-delayed'));
   };

   return (
      <div className="app-block book-form">
         <h2>Add a New Book</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="title">Title: </label>
               <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               ></input>
            </div>
            <div>
               <label htmlFor="author">Author: </label>
               <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  // onChange={handleFn}
               ></input>
            </div>
            <button type="submit">Add Book</button>
            <button type="button" onClick={handleAddRandomBook}>
               Add Random
            </button>
            <button
               type="button"
               onClick={handleAddRandomViaAPI}
               disabled={isLoading}
            >
               {isLoading ? (
                  <>
                     <span>Loading Book...</span>
                     <FaSpinner className="spinner" />
                  </>
               ) : (
                  'Add Random via API'
               )}
            </button>
         </form>
      </div>
   );
};

export default BookForm;
