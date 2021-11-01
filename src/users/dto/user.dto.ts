import { StatusUser } from '../entities/user.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  status: StatusUser;

}
