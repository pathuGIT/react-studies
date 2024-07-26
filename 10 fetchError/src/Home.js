import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        setTimeout(()=>{
            console.log('use effect ran');
            fetch('http://localhost:8000/blogs')

            .then(res=>{
                if(!res.ok){
                    throw Error('Err: could not fetch the data for that resource');
                }    
                return res.json();
            })
            .then(data=>{
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                setError(err.message);
                setIsPending(false);
            })
        },1000)
    },[])

    return ( 
        <div class="home">
            <h2>Home wojo</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogss={blogs} handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;