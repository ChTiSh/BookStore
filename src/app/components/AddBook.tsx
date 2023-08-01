'use client'
import { add } from "../../../store/changeSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { useState} from "react"
import { Book } from "../../../types/types";


export default function PopUpModal(): JSX.Element {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [description,setDescription] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    
    const bookDetails: Book = {
      name: name,
      price: price, 
      category: category,
      description: description,
    }
    const handleSubmit = () =>{
      dispatch(add(bookDetails))
    }

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = (): void => {
        setIsVisible(false);
    };
    
    return (
      <div className='addABook'>
        {isVisible && (
          <div>
            <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <label>: </label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} />
            <label>Name: </label>
            <input type="text" onChange={(e) => setCategory(e.target.value)} />
            <label>Name: </label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleClick}>Back</button>
            <input type='submit' />
            </form>
          </div>
        )}
      </div>
    )
}