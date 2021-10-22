import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { StatusUser } from "./user.entity";

export class StatusValidation implements PipeTransform {
    readonly allowedStatus = [
        StatusUser.OPEN,
        StatusUser.IN_PROGRESS,
        StatusUser.DONE,
    ];

    transform(value:any){
        value = value.toUpperCase();

        if (!this.StatusValid(value)){
            throw new BadRequestException(`"${value}" no exit status`)
        }
        return value
    }

    private StatusValid(status: any){
        const result = this.allowedStatus.indexOf(status)
        return result !== -1;
    }
}
    