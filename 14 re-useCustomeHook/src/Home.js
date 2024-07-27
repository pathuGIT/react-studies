import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const {blogs, isPending, error, setBlogs} = useFetch('http://localhost:8000/blogs');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


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