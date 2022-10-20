import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, RoleDocument } from './schemas/role.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Role.name) private readonly roleModel: Model<RoleDocument>,
  ){}
  
  async createRole(name: string): Promise<any> {
    const createdRole = this.roleModel.create({
        value: name
    })
    return createdRole;
  }
}
