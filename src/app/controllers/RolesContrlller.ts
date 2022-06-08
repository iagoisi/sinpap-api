import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Roles from '../models/Roles';

class PermissionsController {
  async create(req: Request, res: Response) {
    const rolesRepository = getRepository(Roles);

    // const permissions = await permissionsRepository.find();

    const { name, descripition } = req.body;

    const existRoles = await rolesRepository.findOne({name});

    if(existRoles) {
      return res.status(400).json({ erros: "Role already exists!" })
    }

    const role = rolesRepository.create({
      name,
      descripition
    });

    await rolesRepository.save(role);
    
    return res.json(role)

  }
}

export default new PermissionsController();
