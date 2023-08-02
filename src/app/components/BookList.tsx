'use client'

import React from "react";
import { useState } from "react";
import SingleBook from "./singlebook" 
import { Book } from "../../../types/types";
import { BookListProps } from "../../../types/types"
import { useDispatch } from 'react-redux';
import { remove } from '../../../store/changeSlice';
import ModifyBook from "./modifybook";
  
const BookList: React.FC<BookListProps> = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const dispatch = useDispatch();

  const handleModify = (book: Book) => {
    setSelectedBook(book);
  };

  const handleRemove = (bookId: number) => {
    dispatch(remove(bookId));
  };

  const handleModifySubmit = () => {
    //close the original book while modifying
    setSelectedBook(null);
  };
  return (
    <div className='booklist flex' id='booklist'>
      {books.map((book: Book) => (
        <div key={book.id} className="mx-10" >
          
          {selectedBook && selectedBook.id === book.id ? (
            <ModifyBook book={selectedBook} onSubmit={handleModifySubmit} />
          ): (
            <div >
                <SingleBook book={book} onClick={() => handleModify(book)} />
            </div>
          )}
          {book.id !== undefined && (
            <button onClick={() => handleRemove(book.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
