import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task{

    @Prop({ required: true })
    id: number

    @Prop({ required: true })
    question: string

    @Prop({ required: true })
    options: [{
        text: string,
        veracity: boolean
    }]

    @Prop({ required: true })
    rating: number


}

export const TaskSchema = SchemaFactory.createForClass(Task)