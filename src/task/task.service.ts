import { Injectable } from "@nestjs/common";


@Injectable()
export class TaskService{
    private readonly tasks = [];

    create(){}
}