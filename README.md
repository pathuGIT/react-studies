

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
