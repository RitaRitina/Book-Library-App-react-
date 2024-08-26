import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice.js'
import booksReducer from './books/reducer.js';

const store = configureStore({
   reducer: {
      books: booksReducer,
		filter: filterReducer,
   },
});

export default store;
