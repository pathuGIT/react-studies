import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState(null)



    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use effect ran');
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setBlogs(data);
        })
    },[])

    return ( 
        <div class="home">
            <h2>Home wojo</h2>
            {blogs && <BlogList blogss={blogs} handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;