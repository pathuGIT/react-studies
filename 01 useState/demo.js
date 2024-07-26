import React, { useState } from 'react';


const Home = () => {

    const [name, setName] = useState('Namal')      

    const handleClick = ()=>{
        setName('Chamara')
    }

    return ( 
        <div class="home">
            <h2>Home wojo</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;