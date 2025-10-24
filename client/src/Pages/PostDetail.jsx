import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">← Back to all posts</Link>
    </div>
  );
}

export default PostDetail;
