'use client'
import { modify } from "../../../store/changeSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { useState} from "react"
import { Book } from "../../../types/types";
import React from "react";

const ModifyBook:  React.FC<Book> = ({ book }) => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [description,setDescription] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    
    const bookDetails: Book = {
      id: book.id,
      name: name,
      price: price, 
      category: category,
      description: description,
    }
    
    const handleSubmit = () =>{
      dispatch(modify(bookDetails))
   }
    //need to display the original value
    //then send the modified value to the store
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input type="text" value={book.name} onChange={(e) => setName(e.target.value)} />
          <label>Price: </label>
          <input type="text" value={book.pirce} onChange={(e) => setPrice(e.target.value)} />
          <label>Category: </label>
          <input type="text" value={book.category} onChange={(e) => setCategory(e.target.value)} />
          <label>Description: </label>
          <input type="text" value={book.description} onChange={(e) => setDescription(e.target.value)} />
          <input type='submit' value='Modify'/>
        </form>
      </div>
    )
}

export default ModifyBook;