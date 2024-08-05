import React from 'react';
import BookContextProvider from './context/BookContext';
import Navgbar from './components/Navgbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navgbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
