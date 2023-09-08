import express from "express";
import { getPosts } from "../controller/post-controller.js";
import { userSignup , userLogin} from "../controller/user-controller.js";

const router=express.Router();

router.get('/posts',getPosts);

router.post('/signup',userSignup); 
    //usersignup: callback function after signup hit to do something
router.post('/login',userLogin); 
export default router;