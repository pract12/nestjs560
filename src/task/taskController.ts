import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TaskService } from './taskService';
import {Task} from './taskModel'
import { TaskDto } from './taskDto';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('task')
  async createTask(@Body() taskDto: TaskDto) {
    return (await this.taskService.createTask(taskDto));
  }

  @Get(':taskId')
  async getTask(@Param() taskId:string){
    return this.taskService.getTask(taskId)
  }

  @Put('/task/:id')
  async updateTask(@Param('id') id:string, @Body() taskDto:Task) {
    return await this.taskService.updateTask(id, taskDto)
  }

  @Delete('/task/:id')
  async deleteTask(@Param('id') id:string ) {
    console.log(id)
    return await this.taskService.deleteTask(id)
  }
}