import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';
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
         dispatch(addBook(createBookWidthId({title, author})));
         setTitle('');
         setAuthor('');
      }
   };

   const handleAddRandomBook = () => {
      const randomIndex = Math.floor(Math.random() * booksData.length);
      const randomBook = booksData[randomIndex];
      dispatch(addBook(createBookWidthId(randomBook)));
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
            <button type="submit" onClick={handleAddRandomBook}>
               Add Random
            </button>
         </form>
      </div>
   );
};

export default BookForm;
