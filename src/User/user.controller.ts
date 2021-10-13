import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './Dto/user.dto';
import { StatusUser, User} from './user.entity'


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserByID(id);
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDto): Promise<void> {
    return this.userService.createUser(createUserDTO);
  }

  @Patch('/:id/status')
  updateStatusUser(
    @Param('id') id: number,
    @Body('status') status: StatusUser,
): Promise<void> {
    return this.userService.updateStatusUser(id, status);
  }

  @Patch('/:id/password')
  updatePasswordUser(
    @Param('id') id: number,
    @Body('password') password: string,
  ): Promise<void> {
    return this.userService.updatePasswordUser(id, password);
  }


  @Delete('/:id')
  deleteUserById(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUserById(id);
  }
}
