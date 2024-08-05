import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:'Book1', author:'author A', id:1},
        {title:'Book2', author:'author B', id:2},
        {title:'Book3', author:'author C', id:3},
    ])
    const addBooks = (title,author)=>{  
        setBooks(prev => 
            [...prev, {title:title, author:author, id:uuidv4()}]            
        )        
    }
    const removeBook = (id)=>{
        setBooks(books.filter((book) => book.id !== id))
    }

    return (
        <BookContext.Provider value={{books, addBooks, removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;