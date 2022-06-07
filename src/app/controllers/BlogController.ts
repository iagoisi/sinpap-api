import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Blog from '../models/Blog';

class BlogController {

  async index(req:Request, res:Response) {
    const blogRepository = getRepository(Blog);

    const blogs = await blogRepository.find({
      relations: ['images_blog']
    });

    return res.json(blogs);
  }


  async show(req:Request, res:Response) {
    const { id } = req.params;

    const blogRepository = getRepository(Blog);

    const blog = await blogRepository.findOneOrFail(id, {
      relations: ['images_blog']
    });

    return res.json(blog);
  }

  async create(req:Request, res:Response) {
    const {
      titulo,
      texto,
      createdDate,
      updatedDate,
    } = req.body;
  
    const blogRepository = getRepository(Blog);

    const requestImages = req.files as Express.Multer.File[];

    const images_blog = requestImages.map(image => {
      return { path: image.filename }
    })
  
    const blog = blogRepository.create({
      titulo,
      texto,
      createdDate,
      updatedDate,
      images_blog
    });
  
    await blogRepository.save(blog);
  
    return res.status(201).json(blog);
  }

}

export default new BlogController();