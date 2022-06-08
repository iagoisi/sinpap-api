import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {

  async index(req:Request, res:Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    return res.json(users);
  }


  async show(req:Request, res:Response) {
    const { id } = req.params;
    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail(id);

    return res.json(user);
  }

  async store(req: Request, res: Response) {
    const userRepository = getRepository(User);
    const { 
      name,
      email, 
      password, 
      id_perito,
      createdDate,
      updatedDate,
     } = req.body;

    const userExists = await userRepository.findOne({ where: { email } });

    if (!userExists) {
      return res.sendStatus(409);
    }

    const user = userRepository.create({ 
      name, 
      email, 
      password, 
      id_perito, 
      createdDate,
      updatedDate,
     });
    await userRepository.save(user);

    delete user.password;

    return res.status(201).json(user);

  }

}

export default new UserController();