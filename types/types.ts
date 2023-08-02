export type Book = {
    id: number;
    name:string; 
    price: string; 
    category: string; 
    description:string;
}

export type BookListProps = {
    books: Book[]; 
}

export type SingleBookProps = {
    book: Book;
}

export type newBook = {
    newBook: Boolean;
}