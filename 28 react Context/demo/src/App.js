import React from 'react';
import Navbar from './components/Navbar';
import Book from './components/Book';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';
// import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <AuthContextProvider>
            <Navbar/>
            <Book />
            <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
