

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

### React Router

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;

```

### Routes Params

```js
// App.js
import BlogDetails from './BlogDetails';

function App() {
........
          <Switch>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
          </Switch>
........
  );
}
```

```js
// BlogDetails.js

const BlogDetails = () => {
    const {id} = useParams();

    return (
        <div class="blog-deatil">
            <h1>Blog Detail: {id}</h1>
        </div>
    );
}
 
export default BlogDetails;
```

### Reusing Custom Hook

```js
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {
    const {id} = useParams();
    const {blogs, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div class="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {
                blogs && <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                </article>
            }
        </div>
    );
}
```

### Forms Submit Event

```js
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
    }

    return (
        <div class="create">
            <h1>Add New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

                <label>Blog Author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button>Add Blog</button>    
            </form>
        </div>
    );
}
```

### Form POST Requets

```js
import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIspending] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIspending(true);

        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(blog)
            }).then(()=>{
                console.log('new blog added');
                setIspending(false);
            })
        }, 1000);
    }

    return (
        <div class="create">
            <h1>Add New Blog</h1>
            <form onSubmit={handleSubmit}>
                //same above ................
                {!isPending && <button>Add Blog</button> }   
                {isPending && <button disabled>Adding Blog...</button> }   
            </form>
        </div>
    );
}
 
export default Create;
```

### Redirects

```js
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
    const history = useHistory();
    

            }).then(()=>{
                console.log('new blog added');
                setIspending(false);
                //history.go(-1);           -> go back
                //history.push('/');        -> go forward
            })

```

### Handle Delete

```js
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/'); // Redirect to home page
        })
    }

    return (
        <div class="blog-details">
            .............
            {
                blogs && <article>
                     ...........
                    <button onClick={handleDelete}>Delete</button>
                </article>
            }
        </div>
    );
}
```

### Not Found [404 Error]

```js
// NoFound.js

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="not-found">
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
}
```

```js
// NotFound.js

import NotFound from './NotFound';

    .............

            <Route path="*">
              <NotFound />
            </Route> 

   ............     

```


### Updating a Specific Object in list

```js
const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25, city: 'New York' },
    { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Charlie', age: 28, city: 'Chicago' }
]);
```

```js
const updateUserCity = (id, newCity) => {
    setUsers(prevUsers => 
        prevUsers.map(user => 
            user.id === id ? { ...user, city: newCity } : user
        )
    );
};

// Example usage:
updateUserCity(2, 'San Francisco');
```

### Fetch Json 

```js
import React, { useEffect, useState } from 'react';

function App() {
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);

  },[])

  return (
    <div className='App'>
      {
        data.map((x)=>(
          <li key={x.id}>{x.login}</li>
        ))
      }
    </div>
  );
}

export default App;
```

### useReducer 

 - Handling complex state with useReducer
```js
import React, { useReducer } from 'react';

function App() {
  
  const [number, setNumber] = useReducer(
    (number, newNumber) => number+newNumber,0
  )

  return (
    <div className='App'>
      <p onClick={()=>setNumber(1)}>{number}</p>
     </div> 
  );
}
```


- Refactoring useState to useReducer
```js

function App() {
  
  const [checked, toggle] = useReducer(
    (checked) => !checked, false
  )

  return (
    <div className='App'>
      <input type="checkbox" value={checked} onChange={toggle}/>
      {checked ?  'yes check' : 'no check'}
     </div> 
  );
}

export default App;
```

 - Dispatching actions with useReducer
```js
function App() {
  
  function reduser(state, action){
    switch(action){
      case 'xx':
        return {count: state.count+1}
      case 'yy':
        return {count: state.count-1}  
    }
  }

  const initialState = {
    count: 0
  }

  const [state, dispatch] = useReducer(reduser, initialState)

  return (
    <div className='App'>
      {state.count}
      <button onClick={()=>dispatch('xx')}>+</button>
      <button onClick={()=>dispatch('yy')}>-</button>
    </div> 
  );
}

```
