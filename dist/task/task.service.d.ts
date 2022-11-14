import { Model } from 'mongoose';
import { TaskDocument } from 'src/task/schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TaskService {
    private readonly taskModel;
    private readonly tasks;
    constructor(taskModel: Model<TaskDocument>);
    create(dto: CreateTaskDto): Promise<any>;
}
