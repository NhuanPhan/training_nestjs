import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { StatusUser, User } from './entities/user.entity';
import { CreateUserDto } from './dto/user.dto'; 
import { FilterDto } from './dto/user.filter.dto';


@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, type, status } = createUserDto;
    const user = new User();
    user.id = undefined;
    user.username = username;
    user.password = password;
    user.type = type;
    user.status = status ;
    user.save();  
    return user
  }

  async getAllUser(): Promise<User[]> {
    console.log('Get All')
    return await User.find();
  }

  async getFilterUser(filterDto: FilterDto): Promise<User[]> {
    const {status, search} = filterDto;

    let user = await this.getAllUser();

    if(status) {
      user = user.filter( user => user.status === status );

    }
    if(search){
      user = user.filter(user =>
        user.username.includes(search) ||
        user.type.includes(search),
      );
    }
    return user;
  }

  async getUserByID(id: number): Promise<User> {
    try{
      const ID = await User.findOne(id);
      if(!ID) {
        throw new NotFoundException ();
      }
      return ID;
  }   
     catch (e) {
      console.log("Error id")
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'This is a error message',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateStatusUser(id: number, status: StatusUser): Promise<User> {
    const USER = await this.getUserByID(id);
    USER.status = status;
    USER.save();
    return USER
  }
  
  async updatePasswordUser(id: number, password: string): Promise<User> {
    const USER = await this.getUserByID(id);
    USER.password = password;
    USER.save();
    return USER
  }
  async deleteUserById(id: number): Promise<void> {
    try{
      const result = await User.delete(id);

      if (result.affected === 0) {
        throw new NotFoundException ();
      }
    }   
     catch (e) {
      console.log("No id delete")
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'This is a error message',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}