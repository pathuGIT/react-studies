import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext';

const Navgbar = () => {
    const {books} = useContext(BookContext);

    return (
        <div class="navbar">
            <h1>wojo reading list</h1>
            <p>Currently you have {books.length} books to get..</p>
            
        </div>
    );
}
 
export default Navgbar;