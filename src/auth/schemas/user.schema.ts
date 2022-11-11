import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document

@Schema()
export class User{
    @Prop({required: true})
    firstName: string

    @Prop({required: false})
    lastName: string

    @Prop({required: true, unique: true})
    email: string

    @Prop({required: true})
    password: string

    @Prop({required: true, ref: 'Role'})
    roles: [{}]

}

export const UserSchema = SchemaFactory.createForClass(User)