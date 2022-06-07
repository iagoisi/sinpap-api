import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';


class AuthController {
  async authenticate(req: Request, res: Response) {
    const authRepository = getRepository(User)
    const { email, password } = req.body;

    const user = await authRepository.findOne({ where: { email } });
    

    if(!user) {
      return res.sendStatus(401).json({ error: 'User not found!' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    // const isValidStatus = await bcrypt.compare(status, user.status);

    if(!isValidPassword) {
      return res.sendStatus(401).json({ error: 'Incorrect password or e-mail' });
    }

    // if(status != "A") {
      // return res.sendStatus(401);
      // next();
    // }
    const token = jwt.sign({ id: user.email }, 'secret', { expiresIn: '1d' });

    delete user.password;
    
    return res.json({
      user,
      token,
    });

  }

}

export default new AuthController();