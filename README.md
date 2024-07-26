

### Use State

```js
import React, { useState } from 'react';


const Home = () => {

    const [name, setName] = useState('Namal')      

    const handleClick = ()=>{
        setName('Chamara')
    }

    return ( 
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    );
}
 
export default Home;
```

### Outputing List
```js
import React, { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])

    return ( 
        <div class="home">
            <h2>Home wojo</h2>
            {blogs.map((blog) => (
                <div class="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;
```

### Props

```js
//Home Page
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])

    return ( 
        <div class="home">
            <BlogList blogss={blogs}/>
        </div>
    );
}

// BlogList Page
const BlogList = (props) => {

    const blogs = props.blogss;

    return ( 
        <div class="blog-list">
            {blogs.map((blog) => (
                <div class="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
```

### Resuing Component

```js
//Home Page
//same as above
            <BlogList blogss={blogs.filter((e) => e.author === 'mario' && e.id === 1)}/> 
//same as above
}
 
export default Home;
```

### Function as Props

Method 1

```js
//Home page
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])

    return ( 
        <div class="home">
            <BlogList blogss={blogs} handleDelete={
                (id) => {
                    const newBlogs = blogs.filter(e => e.id !== id);
                    setBlogs(newBlogs);
                }
            }/>
        </div>
    );
}

//BlogList Page
const BlogList = ({blogss,handleDelete}) => {

    return ( 
        <div class="blog-list">
            {blogss.map((blog) => (
                <div class="blog-preview" key={blog.id}>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
```

Method 2

```js
//Home Page
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div class="home">
            <h2>Home wojo</h2>
            <BlogList blogss={blogs} handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;

//BlogList page
const BlogList = ({blogss,handleDelete}) => {
    return ( 
        <div class="blog-list">
            {blogss.map((blog) => (
                <div class="blog-preview" key={blog.id}>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
```

### use Effect

```js
const Home = () => {
    const [name, setName] = useState('mario');

      useEffect(()=>{
        console.log('use effect ran');
        console.log(name);
      },[name])

    return ( 
        <div class="home">
            <button onClick={()=> setName('naml')}>effect</button>
        </div>
    );
}
```

### Fetching Data with useEffect

```js
//db.json
............

//Home js
const Home = () => {
    const [blogs, setBlogs] = useState(null)

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
            {blogs && <BlogList blogss={blogs} />}
        </div>
    );
}
```

### Conditional Loading Message

```js
const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            console.log('use effect ran');
            fetch('http://localhost:8000/blogs')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setBlogs(data);
                setIsPending(false);
            })
        },1000)
    },[])

    return ( 
        <div class="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogss={blogs}/>}
        </div>
    );
}

```

### handelling Fetch Error

```js
const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

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
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogss={blogs}/>}
        </div>
    );
}
```

### Custom Hook

```js
//Home.js
const Home = () => {
    
    const {blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

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

// useFetch.js
import { useEffect, useState } from 'react';

const useFetch = (url) => {
    
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

        useEffect(()=>{
            setTimeout(()=>{
                console.log('use effect ran');
                fetch(url)
    
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
        },[url]);

    return {blogs, isPending, error}
}
 
export default useFetch;
```
