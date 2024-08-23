import { v4 as uuidv4 } from 'uuid';

const createBookWidthId = (book) => {
   return {
      ...book,
      isFavorite: false,
      id: uuidv4(),
   };
};

export default createBookWidthId;
