import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    const {id} = useParams();
    const {blogs, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
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
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {
                blogs && <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            }
        </div>
    );
}
 
export default BlogDetails;