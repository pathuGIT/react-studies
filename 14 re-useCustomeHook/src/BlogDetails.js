import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

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
 
export default BlogDetails;