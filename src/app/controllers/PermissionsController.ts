import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Permissions from '../models/Permissions';

class PermissionsController {
  async create(req: Request, res: Response) {
    const permissionsRepository = getRepository(Permissions);

    // const permissions = await permissionsRepository.find();

    const { name, descripition } = req.body;

    const existPermission = await permissionsRepository.findOne({name});

    if(existPermission) {
      return res.status(400).json({ erros: "Permission already exists!" })
    }

    const permission = permissionsRepository.create({
      name,
      descripition
    });

    await permissionsRepository.save(permission);
    
    return res.json(permission)

  }
}

export default new PermissionsController();
