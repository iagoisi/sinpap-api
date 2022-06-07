import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Post from '../models/Post';

class PostController {

  async index(req:Request, res:Response) {
    const postRepository = getRepository(Post);

    const posts = await postRepository.find({
      relations: ['images_post']
    });
    
    return res.json(posts)
    // const builder = postRepository.createQueryBuilder('posts')
    // .leftJoinAndSelect("posts.images_post", "images_post");

    // const page: number = parseInt(req.query.page as any) || 1;
    // const perPage = 6;
    // const total = await builder.getCount();


    // builder.offset((page - 1) * perPage).limit(perPage);

    // res.send({
    //   resposta: await builder.getMany(),
    //   total,
    //   page,
    //   totalPageCount: Math.ceil(total / perPage),
    // });


  }

  async show(req:Request, res:Response) {
    const { id } = req.params;

    const postRepository = getRepository(Post);

    const post = await postRepository.findOneOrFail(id, {
      relations: ['images_post']
    });

    return res.json(post);
  }

  async create(req:Request, res:Response) {
    const {
      title,
      text,
      createdDate,
      updatedDate,
      link,
    } = req.body;
  
    const postRepository = getRepository(Post);

    const requestImages = req.files as Express.Multer.File[];

    const images_post = requestImages.map(image => {
      return { path: image.filename }
    })
  
    const post = postRepository.create({
      title,
      text,
      createdDate,
      updatedDate,
      link,
      images_post,
    });
  
    await postRepository.save(post);
  
    return res.status(201).json(post);
  }

}

export default new PostController();