import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:choco44moco@cluster0.qbowpfe.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
