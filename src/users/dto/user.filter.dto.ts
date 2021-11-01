import { StatusUser } from "../entities/user.entity";

export class FilterDto {
    status: StatusUser;
    search: string;
}