import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { UserSchema } from './user/userModel';
import { UserController } from './user/userController';
import { UserService } from './user/userService';
import { TaskController } from './task/taskController';
import { TaskService } from './task/taskService';
import { TaskSchema } from './task/taskModel';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://VishalJaiswal:vishalashu@newcluster.9n9kfap.mongodb.net/vishal?retryWrites=true&w=majority'),
MongooseModule.forFeature([{
   name: 'user',
   schema: UserSchema
},
{
  name: 'task',
schema: TaskSchema
}]),
 
 JwtModule.register({
  secret: 'secretKey',
  signOptions: { expiresIn: '60s' },
})
],
  controllers: [UserController, TaskController],
  providers: [UserService, TaskService],
})
export class AppModule {}
