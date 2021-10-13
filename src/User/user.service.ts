import { Injectable } from '@nestjs/common';
import {  StatusUser, User } from "./user.entity";
import { CreateUserDto } from './Dto/user.dto'; 

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const { username, password, status } = createUserDto;
    const user = new User();
    user.id = undefined;
    user.username = username;
    user.password = password;
    user.status = status ;
    await user.save();
  }

  async getUserByID(id: number): Promise<User> {
    const USER = await User.findOne(id);
    return USER;
  }
  async getAllUser(): Promise<User[]> {
    return await User.find();
  }

  async updateStatusUser(id: number, status: StatusUser): Promise<void> {
    const USER = this.getUserByID(id);
    (await USER).status = status;
    (await USER).save();
  }
  async updatePasswordUser(id: number, password: string): Promise<void> {
    const USER = this.getUserByID(id);
    (await USER).password = password;
    (await USER).save();
  }
  async deleteUserById(id: number): Promise<void> {
    await User.delete(id);
  }
}