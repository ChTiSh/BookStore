'use client'
import React from "react";
import { add } from "../../../store/changeSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { useState} from "react"
import { Book } from "../../../types/types";

const AddBook:  React.FC = () =>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [description,setDescription] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    
    const bookDetails: Book = {
      id: Date.now(),
      name: name,
      price: price, 
      category: category,
      description: description,
    }
    const handleSubmit = () =>{
      dispatch(add(bookDetails))
      console.log(bookDetails);
      console.log('Form submitted');
      setIsVisible(false);
    }

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = (): void => {
        setIsVisible(!isVisible);
    };
    
    return (
      <div className='addABook'>
        {isVisible && (
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
            <button onClick={handleClick}>Back</button>
            <input type='submit' />
            </form>
          </div>
        )}
      </div>
    )
}
export default AddBook;