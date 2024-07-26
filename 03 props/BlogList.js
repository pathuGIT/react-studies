const BlogList = (props) => {

    const blogs = props.blogss;

    return ( 
        <div class="blog-list">
            {blogs.map((blog) => (
                <div class="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;