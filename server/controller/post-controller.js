import Post from "../model/post-schema.js"
//const router = require("express").Router();

export const getPosts = async (request,response) =>{
    try{
        const posts= await Post.find({});
        response.status(200).json(posts);
    }
    catch(error){
        response.status(200).json({message: error.message});   
    }
}

//Like
// router.put("/:id/like" , async(req , res)=>{
//     try {
//           const post = await Post.findById(req.params.username);
//           if(!post.like.includes(req.user.username)){
//                 if(post.dislike.includes(req.user.id)){
//                       await post.updateOne({$pull:{dislike:req.user.username}})
//                 }
//                 await post.updateOne({$push:{like:req.user.username}})
//                 return res.status(200).json("Post has been liked")
                
//           }else{
//                 await post.updateOne({$pull:{like:req.user.username});
//                 return res.status(200).json("Post has been unlike")
//           }
          
//     } catch (error) {
//      return res.status(500).json("Internal server error ")     
//     }
// })
// //Dislike
// router.put("/:id/dislike" ,verifyToken, async(req , res)=>{
//     try {
//           const post = await Post.findById(req.params.id);
//           if(!post.dislike.includes(req.user.id)){
//                 if(post.like.includes(req.user.id)){
//                       await post.updateOne({$pull:{like:req.user.id}})
//                 }
//                 await post.updateOne({$push:{dislike:req.user.id}})
//                 return res.status(200).json("Post has been disliked")
//           }else{
//                 await post.updateOne({$pull:{dislike:req.user.id}});
//                 return res.status(200).json("Post has been unlike")
//           }
          
//     } catch (error) {
//           return res.status(500).json("Internal server error")
//     }

// })
