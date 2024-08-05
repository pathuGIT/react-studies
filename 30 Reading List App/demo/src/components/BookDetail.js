import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext';

const BookDetail = ({book}) => {
    const {removeBook} = useContext(BookContext);
    
    return (
        <li onClick={ ()=> removeBook(book.id)}>
            <div>{book.title}</div>
            <div>{book.author}</div>
        </li>
    );
}
 
export default BookDetail;