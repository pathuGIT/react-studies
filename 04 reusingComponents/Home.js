import React, { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])

    return ( 
        <div class="home">
            <h2>Home wojo</h2>
            <BlogList blogss={blogs}/>
            <BlogList blogss={blogs.filter((e) => e.author === 'mario' && e.id === 1)}/> 
        </div>
    );
}
 
export default Home;