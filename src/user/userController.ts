import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { UserService } from './userService';
import {User} from './userModel'



@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async createUser(@Body() userDto: User) {
    return this.userService.createUser(userDto);
  }    

  @Get('get')
  @HttpCode(20)
  async getUser(req:Request) {
    console.log(req)
    return this.userService.getUser()
  }

  @Post('logInUser')
  async logINUser(@Body() userDto: User){
     return this.userService.logINUser(userDto)
  } 

}