import {SingleBookProps} from "../../../types/types";

const SingleBook: React.FC<SingleBookProps> = ({ book }) => {
    return (
      <div>
        <h2>Name: {book.name}</h2>
        <p>Category: {book.category}</p>
        <p>Price: {book.price}</p>
        <p>Description: {book.description}</p>
      </div>
    )
}
export default SingleBook;