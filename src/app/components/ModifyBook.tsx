'use client'
import { modify } from "../../../store/changeSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { useState} from "react"
import { Book } from "../../../types/types";
import React from "react";

const ModifyBook:  React.FC<Book> = ({ book }) => {
    const [name,setName] = useState(book.name);
    const [price,setPrice] = useState(book.pirce);
    const [category,setCategory] = useState(book.category);
    const [description,setDescription] = useState(book.description);

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
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Price: </label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          <label>Category: </label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
          <label>Description: </label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type='submit' value='Modify'/>
        </form>
      </div>
    )
}

export default ModifyBook;