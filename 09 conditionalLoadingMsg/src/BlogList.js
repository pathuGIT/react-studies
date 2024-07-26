const BlogList = ({blogss,handleDelete}) => {

    return ( 
        <div class="blog-list">
            {blogss.map((blog) => (
                <div class="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;