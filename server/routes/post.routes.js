import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const postRouter = new Router();

// Get all Posts
postRouter.route('/posts').get(PostController.getPosts);

// Get one post by cuid
postRouter.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
postRouter.route('/posts').post(PostController.addPost);

// Delete a post by cuid
postRouter.route('/posts/:cuid').delete(PostController.deletePost);

export default postRouter;
