'use client'
import BookList from './components/booklist';
import { Suspense, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../store'; 
import { Book } from "../../types/types";
import AddBook from './components/addbook';
import Loading from './loading';


export default function Home() {
  const [newBook, setNewBook] = useState(false);
  const onClickAdd = ():any =>{
    setNewBook(!newBook);
  }
  const books: Book[] = useSelector((state: RootState) => state.changeReducer);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>
      <div>
        <button onClick={onClickAdd} className='absolute top-40 right-5'>Add a book</button>
        {newBook && <AddBook />}
      </div>
     <Suspense fallback={<Loading /> }>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <BookList books={books} />
      </div>
      </Suspense>
    </main>
  )
}
