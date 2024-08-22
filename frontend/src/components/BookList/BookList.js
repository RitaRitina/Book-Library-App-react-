import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/actionCreators';
import './BookList.css';

const BookList = () => {
   const books = useSelector((state) => state.books);
   const dispatch = useDispatch();
   const handleClick = (id) => {
      dispatch(deleteBook(id));
   };
   console.log(books);
   return (
      <div className="app-block book-list">
         <h2>Book List</h2>
         {books.length === 0 ? (
            <p>No books available</p>
         ) : (
            // <p>it`s me</p>
            <ul>
               {books.map((book, i) => (
                  <li key={book.id}>
                     <div className="book-info">
                        {++i}. {book.title} by <strong>{book.author}</strong>
                     </div>
                     <div className="book-actions">
                        <button onClick={() => handleClick(book.id)}>
                           Delete
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default BookList;
