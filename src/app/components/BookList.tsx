import React from "react";
import { useState } from "react";
import SingleBook from "./singlebook" 
import { Book } from "../../../types/types";
import { BookListProps } from "../../../types/types"
import { useDispatch } from 'react-redux';
import { remove } from '../../../store/changeSlice';

import ModifyBook from "./modifybook";
  
const BookList: React.FC<BookListProps> = ({ books }) => {
    const [selectedBook, setSelectedBook] = useState(null);
    const [isComponentVisible, setComponentVisible] = useState(false);
    const handleModify = (book: Book)=>{
        setSelectedBook(book);
        setComponentVisible(!isComponentVisible);
    }
    const dispatch = useDispatch();
    const handleRemove = (bookId: number) => {
      dispatch(remove(bookId));
    };
    return(
        <div className='booklist' id='booklist'>
        {books.map((book: Book) => (
            <div key={book.id}>
            <a href={`/${book.id}`}>
                <SingleBook book={book} onClick={() => handleModify(book)}  />
            </a>
            {isComponentVisible && <ModifyBook book={selectedBook} />}
            {book.id !== undefined && (
                <button onClick={() => handleRemove(book.id)}>Delete</button>
            )}
            
            </div>
        ))}
        </div>
    )
  };
  
  export default BookList;
