import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { RoleDocument } from './schemas/role.schema';
import { UserDocument } from './schemas/user.schema';
export declare class AuthService {
    private readonly roleModel;
    private readonly userModel;
    private jwtService;
    constructor(roleModel: Model<RoleDocument>, userModel: Model<UserDocument>, jwtService: JwtService);
    createUser({ firstName, lastName, email, password }: {
        firstName: any;
        lastName: any;
        email: any;
        password: any;
    }): Promise<any>;
    login({ email, password }: {
        email: any;
        password: any;
    }): Promise<any>;
    getAllUsers(): Promise<any>;
}
