import { Injectable, UnauthorizedException } from '@nestjs/common';
import  { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import  {User, UserDocument} from './userModel';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>, private jwtService: JwtService){}
  
    async createUser(user: User) {
        const newUser = new this.userModel(user)
        return newUser.save()
    }

    async getUser(){
        return this.userModel.find()
    }

    async logINUser(userDto){
        const users = await this.userModel.findOne({email:userDto.email});
        if (users) {
            const payload = {username: users.email, password: users.password, user_id:users._id}
            const accessMessage: string = await this.jwtService.sign(payload);
            return { accessMessage };
          } else {
            throw new UnauthorizedException('Incorrect login credentials!');
          }
    }
   }
