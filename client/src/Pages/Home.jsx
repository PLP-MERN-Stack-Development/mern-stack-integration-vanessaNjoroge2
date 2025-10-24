import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      alert("Failed to load posts. Please try again later.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle post deletion
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`/api/posts/${id}`);
      alert("✅ Post deleted successfully!");
      fetchPosts(); // Refresh the list
    } catch (err) {
      console.error("Error deleting post:", err);
      alert("❌ Error deleting post. Please try again.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>📝 All Blog Posts</h1>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Link
          to="/create"
          style={{
            textDecoration: "none",
            backgroundColor: "#007BFF",
            color: "white",
            padding: "0.6rem 1.2rem",
            borderRadius: "5px",
          }}
        >
          ➕ Create New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p style={{ textAlign: "center" }}>No posts available yet. Create one!</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1.2rem",
              backgroundColor: "#fafafa",
            }}
          >
            <h2 style={{ marginBottom: "0.5rem" }}>{post.title}</h2>
            <p style={{ marginBottom: "1rem", color: "#555" }}>
              {post.content?.substring(0, 100)}...
            </p>

            <div style={{ display: "flex", gap: "15px" }}>
              <Link to={`/posts/${post._id}`} style={{ color: "blue", textDecoration: "none" }}>
                🔍 View
              </Link>
              <Link to={`/edit/${post._id}`} style={{ color: "green", textDecoration: "none" }}>
                ✏️ Edit
              </Link>
              <button
                onClick={() => handleDelete(post._id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
