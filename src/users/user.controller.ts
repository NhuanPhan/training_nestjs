import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { StatusUser, User } from './entities/user.entity';
import { StatusValidation } from './entities/validation status';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UsePipes(ValidationPipe)
  getAllUser(){
    return this.userService.getAllUser()
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getUserByID(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDTO: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDTO);
  } 

  @Patch(':id/status')
  updateStatusUser(
    @Param('id') id: number,
    @Body('status', StatusValidation) status: StatusUser,
): Promise<User> {
    return this.userService.updateStatusUser(id, status);
  }

  @Patch(':id/password')
  updatePasswordUser(
    @Param('id') id: number,
    @Body('password') password: string,
  ): Promise<User> {
    return this.userService.updatePasswordUser(id, password);
  }

  @Delete(':id')
  deleteUserById(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return this.userService.deleteUserById(id);
  }
}
