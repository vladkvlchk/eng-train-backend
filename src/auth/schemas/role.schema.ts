import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type RoleDocument = Role & Document;

@Schema()
export class Role{
    @Prop({unique: true, default: 'USER'})
    value: string
}

export const RoleSchema = SchemaFactory.createForClass(Role);