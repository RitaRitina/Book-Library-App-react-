import { useDispatch, useSelector } from 'react-redux';
import {
   setTitleFilter,
   setAuthorFilter,
	setFavoriteFilter,
   selectTitleFilter,
	selectAuthorFilter,
	selectFavoriteFilter,
   resetFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
   const dispatch = useDispatch();

   const titleFilter = useSelector(selectTitleFilter);

   const authorFilter = useSelector(selectAuthorFilter);

	const isFavoriteFilter = useSelector(selectFavoriteFilter)

   const handleTitleFilterChange = (e) => {
      dispatch(setTitleFilter(e.target.value));
   };

   const handleAuthorFilterChange = (e) => {
      dispatch(setAuthorFilter(e.target.value));
   };

	const handleFavoriteFilter = () => {
		dispatch(setFavoriteFilter())
	}

   const handleResetFilter = () => {
      dispatch(resetFilter());
   };

   return (
      <div className="app-block filter">
         <div className="filter-row">
            <div className="filter-group">
               <input
                  value={titleFilter}
                  type="text"
                  placeholder="Filter by title..."
                  onChange={handleTitleFilterChange}
               ></input>
            </div>
            <div className="filter-group">
               <input
                  value={authorFilter}
                  type="text"
                  placeholder="Filter by author..."
                  onChange={handleAuthorFilterChange}
               ></input>
            </div>
            <div className="filter-group filter-group--checkbox">
               <input type="checkbox" id="checkbox" checked={isFavoriteFilter} onChange={handleFavoriteFilter}></input>
               <label htmlFor="checkbox">Favorite books</label>
            </div>
            <button type="button" onClick={handleResetFilter}>
               Reset filter
            </button>
         </div>
      </div>
   );
};

export default Filter;
