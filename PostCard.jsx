function PostCard({ post }) {
  return (
    <div className="border p-4 mb-4 rounded shadow-md">
      <p className="font-semibold">{post.content}</p>
      {post.image && (
        <img src={post.image} alt="Post" className="mt-2 rounded max-h-64" />
      )}
      <p className="text-xs text-gray-500 mt-1">Posted on: {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default PostCard;
