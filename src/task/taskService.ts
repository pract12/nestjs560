import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose'
import  { Model, ObjectId} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import  {Task, taskDocument} from './taskModel';
import {  v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
    constructor(@InjectModel('task') private readonly taskModel: Model<taskDocument>){}
  
    async createTask(taskDto) {
      const saveTask = new this.taskModel(taskDto)
      return saveTask.save()
    }
    
    async getTask(taskId){
        return await this.taskModel.findOne({_id:taskId})
    }

    async updateTask(id, taskDto) { 

        const updateTask = await this.taskModel.findOneAndUpdate({_id: id}, taskDto, {new:true})

        if(!updateTask) {
         throw new Error('this _id does not exist')
        }
        return updateTask
        
    
    }
    
    async deleteTask(id) {
         
        const Task = await this.taskModel.findById({_id:id});
        console.log(Task.isDeleted);

        if(Task.isDeleted==false) {
            const deleteTask = await this.taskModel.findOneAndUpdate({isDeleted:true})
            return deleteTask;
        }
        else {
            throw new Error ('this task does not exist  ')
        }
    }

} 