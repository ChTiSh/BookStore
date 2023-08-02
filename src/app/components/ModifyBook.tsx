'use client'
import { modify } from "../../../store/changeSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { useState} from "react"
import { Book } from "../../../types/types";
import Image from "next/image";
import React from "react";

interface ModifyBookProps{
  book:Book;
  onSubmit: () => void;
}

const ModifyBook: React.FC<ModifyBookProps> = ({ book, onSubmit }) => {
    const [name,setName] = useState(book.name);
    const [price,setPrice] = useState(book.price);
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
      onSubmit();
   }
    //need to display the original value
    //then send the modified value to the store
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Image
                src="/bookcover_placeholder.png"
                width={300}
                height={300}
                alt="Placeholder Picture of the book"
          />
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Price: </label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} />
          <label>Category: </label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
          <label>Description: </label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type='submit' value='Save' className="bg-white p-5 border-4"/>
        </form>
      </div>
    )
}

export default ModifyBook;