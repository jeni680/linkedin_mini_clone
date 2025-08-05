import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found");
          return;
        }

        // Decode JWT to extract user ID
        const base64Payload = token.split(".")[1];
        const payload = JSON.parse(atob(base64Payload));
        const userId = payload.id;

        // Fetch user details
        const userRes = await axios.get(`http://localhost:5000/api/auth/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(userRes.data.user);

        // Fetch all posts
        const postRes = await axios.get("http://localhost:5000/api/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Filter only the user's posts
        const myPosts = postRes.data.posts.filter(
          (post) => post.userId.toString() === user._id.toString()
        );

        setPosts(myPosts);
      } catch (err) {
        console.error("Profile fetch failed:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      {user ? (
        <div className="mb-6 p-4 border rounded shadow bg-gray-50">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}

      <h3 className="text-xl font-semibold mt-6 mb-2">Your Posts</h3>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}

      <div className="mt-6 text-center">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
