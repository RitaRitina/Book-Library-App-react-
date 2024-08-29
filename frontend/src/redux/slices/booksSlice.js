import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWidthId from '../../utils/createBookWidthId';

const initialState = [];

export const fetchBook = createAsyncThunk(
	'books/fetchBook',
	async () => {
		const res = await axios.get('http://localhost:4000/random-book');
		return res.data
	}
)

const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
      addBook: (state, author) => {
         state.push(author.payload);
      },
      deleteBook: (state, action) => {
         return state.filter((book) => book.id !== action.payload);
      },
      toggleFavorite: (state, action) => {
         return state.map((book) =>
            book.id === action.payload
               ? { ...book, isFavorite: !book.isFavorite }
               : book
         );
      },
   },
	extraReducers: (builder) => {
		builder.addCase(fetchBook.fulfilled, (state, action) => {
			if(action.payload.title && action.payload.author) {
				state.push(createBookWidthId(action.payload, 'API'))
			}
		})
	}
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books

export default booksSlice.reducer;

