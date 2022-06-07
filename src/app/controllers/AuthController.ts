import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';


class AuthController {
  async authenticate(req: Request, res: Response) {
    const authRepository = await getRepository(User)
    const { email, password, status } = req.body;

    const user = await authRepository.findOne({ where: { email } });
    

    if(!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    // const isValidStatus = await bcrypt.compare(status, user.status);

    if(!isValidPassword) {
      return res.sendStatus(401);
    }

    // if(status != "A") {
      // return res.sendStatus(401);
      // next();
    // }
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

    delete user.password;
    
    return res.json({
      user,
      token,
    });



  }

}

export default new AuthController();