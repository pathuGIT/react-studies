import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const {id} = useParams();

    return (
        <div class="blog-deatil">
            <h1>Blog Detail: {id}</h1>
        </div>
    );
}
 
export default BlogDetails;