import { Response, Router } from 'express';
import multer from 'multer';
import authMiddleware from './app/middlewares/authMiddleware';

import Image from './app/models/ImagePost';

import uploadConfig from './config/upload';
import uploadConfigBlog from './config/uploadBlog';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import BlogController from './app/controllers/BlogController';
import PostController from './app/controllers/PostController';
import PermissionsController from './app/controllers/PermissionsController';


const routes = Router();

const upload = multer(uploadConfig);
const uploadBlog = multer(uploadConfigBlog);

routes.get('/users', authMiddleware, UserController.index);
routes.get('/users', authMiddleware, UserController.store);
routes.get('/users/:id', authMiddleware, UserController.show);
// routes.post('/users', UserController.store);

routes.get('/blog', BlogController.index);
routes.get('/blog/:id', BlogController.show);
// routes.post('/blog', BlogController.create);
routes.post('/blog', uploadBlog.array('images_blog'), BlogController.create);


routes.get('/post', PostController.index);
routes.get('/post/:id', PostController.show);
routes.post('/post', upload.array('images_post'), PostController.create);


routes.post('/auth', AuthController.authenticate);

routes.post('/permissions', PermissionsController.create);

// router.get('/users/:id', authMiddleware, UserController.index);

export default routes;

