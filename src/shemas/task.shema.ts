import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TaskDocument = Task & Document;

@Schema()
export class Task{

    @Prop({ required: true })
    id: number

    @Prop({ required: true })
    question: string

    @Prop({ required: true })
    options: string[]
}

export const TaskSchema = SchemaFactory.createForClass(Task)