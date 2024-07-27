import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIspending] = useState(false);
    const history = useHistory();
    
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
                //history.go(-1);
                history.push('/');
            })
        }, 1000);
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
                <select value={author} onChange={(e)=>setAuthor(e.target.value)} required>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                {!isPending && <button>Add Blog</button> }   
                {isPending && <button disabled>Adding Blog...</button> }   
            </form>
        </div>
    );
}
 
export default Create;