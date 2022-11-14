import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(dto: CreateTaskDto): Promise<void>;
}
