import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { Role, RoleSchema } from './schemas/role.schema';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '24h' },
      })
  ]
})
export class AuthModule {}
