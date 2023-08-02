import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book} from '../types/types'

const bookList: Book[] = [];

export const change = createSlice({
    name: 'book',
    initialState: bookList,
    reducers:{
        modify:(state, action:PayloadAction<Book>)=>{
            const index = state.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
              // Create a new array with the updated book
              state[index] = action.payload;
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            const bookIdToRemove = action.payload;
            return state.filter((book) => book.id !== bookIdToRemove);
        },
        add:(state, action:PayloadAction<Book>)=>{
            const newBook: Book = {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    category: action.payload.category,
                    description: action.payload.description,
                };
            state.push(newBook);
            
        },
    }
})
export const {modify, remove, add} = change.actions;
export default change.reducer;
