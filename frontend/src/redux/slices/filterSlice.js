import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   title: '',
	author: '',
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
			console.log(action)
			state.author = action.payload
		},
		resetFilter: () => {
			return initialState
		}
   },
});

export const { setTitleFilter, resetFilter, setAuthorFilter } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title;

export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;