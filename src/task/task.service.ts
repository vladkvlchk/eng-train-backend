import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/task/schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private readonly tasks = [];

  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  async create(dto: CreateTaskDto): Promise<any> {
    const createdTask = this.taskModel.create({
      ...dto,
      id: Math.floor(Math.random() * 100000),
    });
    return createdTask;
  }
}
