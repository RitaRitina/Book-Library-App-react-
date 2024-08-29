import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBook } from '../../redux/slices/booksSlice';
import createBookWidthId from '../../utils/createBookWidthId';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (title && author) {
         dispatch(addBook(createBookWidthId({ title, author }, 'random')));
         setTitle('');
         setAuthor('');
      }
   };

   const handleAddRandomBook = () => {
      const randomIndex = Math.floor(Math.random() * booksData.length);
      const randomBook = booksData[randomIndex];
      dispatch(addBook(createBookWidthId(randomBook, 'manual')));
   };

   const handleAddRandomViaAPI = () => {
      dispatch(fetchBook());
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
            <button type="button" onClick={handleAddRandomViaAPI}>
               Add Random via API
            </button>
         </form>
      </div>
   );
};

export default BookForm;
