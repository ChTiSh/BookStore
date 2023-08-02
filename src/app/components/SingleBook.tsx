'use client'
import React from "react";
import {Book} from "../../../types/types";
import Image from "next/image";
interface singleBookProps {
    book: Book;
    onClick: () => void;
}


const SingleBook: React.FC<singleBookProps> = ({ book, onClick}) => {
    return (
      <div>
        <a onClick={onClick}>
            <Image
                src="/bookcover_placeholder.png"
                width={200}
                height={300}
                alt="Placeholder Picture of the book"
            />
        </a>
        
        <div>
            <h2>Name: {book.name}</h2>
            <p>Category: {book.category}</p>
            <p>Price: {book.price}</p>
            <p>Description: {book.description}</p>
        </div>
      </div>
    )
}
export default SingleBook;