import { Controller, Get } from '@nestjs/common';
import { TaskSchema } from 'src/shemas/task.shema';

@Controller('task')
export class TaskController {
  @Get()
  getRandom() {
    return { name: 'text of task', options: ['option1', 'option2'] };
  }
}
