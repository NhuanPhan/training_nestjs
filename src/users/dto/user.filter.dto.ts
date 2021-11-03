import { StatusUser } from "../entities/user.entity";

export class GetFilterDto {
    status: StatusUser;
    search: string;
}