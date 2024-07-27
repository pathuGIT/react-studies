import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogss}) => {

    return ( 
        <div class="blog-list">
            {blogss.map((blog) => (
                <div class="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;