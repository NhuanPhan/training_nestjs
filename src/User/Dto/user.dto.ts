import { StatusUser } from "../user.entity";

export class CreateUserDto {
  username: string;
  password: string;
  status: StatusUser;

}
