import SingleBook from "./SingleBook" 
import { Book } from "../../../types/types";
import { BookListProps } from "../../../types/types"
import { useDispatch } from 'react-redux';
import { remove } from '../../../store/changeSlice';
  

const BookList: React.FC<BookListProps> = ({ books }) => {
    
    const dispatch = useDispatch();
    const handleRemove = (bookId: number) => {
      dispatch(remove(bookId));
    };

    <div className='booklist' id='booklist'>
      {books.map((book: Book) => (
        <div key={book.id}>
          <a href={`/${book.id}`}>
            <SingleBook book={book} />
          </a>
          {book.id !== undefined && (
            <button onClick={() => handleRemove(book.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  };
  
  export default BookList;
