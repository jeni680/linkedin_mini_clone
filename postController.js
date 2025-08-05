import Post from '../models/Post.js';

export const createPost = async (req, res) => {
  console.log("Received body:", req.body);
   try {
    const { userId, content, image } = req.body;

    const post = new Post({ userId, content, image }); // image optional
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Post creation failed", error: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate("userId", "username email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Fetching posts failed", error: error.message });
  }
};


