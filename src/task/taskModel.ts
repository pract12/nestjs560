import  {Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema, ObjectId, Types} from 'mongoose';
import { User } from '../user/userModel';
import {  v4 as uuidv4 } from 'uuid';
export type taskDocument = Task & Document

@Schema()
export class Task{

    @Prop({default: uuidv4})
     _id: string ;

    @Prop()
     taskName: string;

    @Prop({default:false})
     isDeleted: boolean;

    @Prop({ type: String , ref: 'User' })
     userId: User
}

export const TaskSchema = SchemaFactory.createForClass(Task)