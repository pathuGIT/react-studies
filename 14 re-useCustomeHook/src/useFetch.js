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

    return {blogs, isPending, error, setBlogs}
}
 
export default useFetch;