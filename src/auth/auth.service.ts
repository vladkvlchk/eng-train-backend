import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Role, RoleDocument } from './schemas/role.schema';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Role.name) private readonly roleModel: Model<RoleDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async createUser({ firstName, lastName, email, password }): Promise<any> {
    try {
      const candidate = await this.userModel.findOne({ email });
      if (candidate) {
        throw new Error('This user already exists');
      }

      const hashPassword = bcrypt.hashSync(password, 8);
      const userRole = await this.roleModel.findOne({ value: 'STUDENT' });
      lastName = lastName ? lastName : ''

      await this.userModel.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
        roles: [userRole.value],
      });
      // return { message: 'The user has been successfully registered' };
      const payload = { email, roles: userRole };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      return { message: error.message };
    }
  }

  async login({ email, password }): Promise<any> {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw new Error(`User not found`);
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        throw new Error('Incorrect password');
      }

      const payload = { email: user.email, roles: user.roles };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      return { message: error.message };
    }
  }

  async getAllUsers(): Promise<any> {
    try {
      const users = this.userModel.find();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
