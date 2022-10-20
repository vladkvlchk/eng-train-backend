import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:choco44moco@cluster0.qbowpfe.mongodb.net/data?retryWrites=true&w=majority',
    ),
    TaskModule,
    AuthModule,
  ],
})
export class AppModule {}
