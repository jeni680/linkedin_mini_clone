import express from 'express';
import { createPost , getAllPosts} from '../controllers/postController.js';
//import { verifyToken } from '../middleware/authMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createPost);
router.get('/', getAllPosts); 

export default router;
