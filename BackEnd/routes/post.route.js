import expree from "express";
import { createPost, deletePost } from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = expree.Router();

router.post('/create', verifyToken,createPost);
router.delete('/delete/:id', verifyToken,deletePost);

export default router;