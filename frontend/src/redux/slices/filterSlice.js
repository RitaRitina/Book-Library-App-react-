import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   title: '',
	author: '',
	isFavorite: false,
};

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setTitleFilter: (state, action) => {
         // return { ...state, title: action.payload };
			//Также можно мутировать state благодаря библиотеке Immer 
			state.title = action.payload
      },
		setAuthorFilter: (state, action) => {
			state.author = action.payload
		},
		setFavoriteFilter: (state) => {
			state.isFavorite = !state.isFavorite
		},
		resetFilter: () => {
			return initialState
		}
   },
});

export const { setTitleFilter, setAuthorFilter, setFavoriteFilter, resetFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export const selectAuthorFilter = (state) => state.filter.author;

export const selectFavoriteFilter = (state) => state.filter.isFavorite;

export default filterSlice.reducer;
