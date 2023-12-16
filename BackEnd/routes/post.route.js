import expree from "express";
import { createPost, deletePost, getPost, updatePost } from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = expree.Router();

router.post('/create', verifyToken,createPost);
router.delete('/delete/:id', verifyToken,deletePost);
router.post('/update/:id', verifyToken, updatePost);
router.get('/get/:id', getPost );

export default router;