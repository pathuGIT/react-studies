

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
