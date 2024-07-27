import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const {blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div class="home">
            <h2>Home wojo</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogss={blogs} />}
        </div>
    );
}
 
export default Home;