import { BadRequestException, PipeTransform } from "@nestjs/common";
import { UserStatus } from "../user-status-validation";


export class UserStatusValidationPipe implements PipeTransform{

    readonly StatusOptions = [
        UserStatus.ACTIVE,
        UserStatus.BAN
    ]

    transform(value: any) {
        // console.log('value', value) '처리가 된 인자의 값'
        // console.log('metadata', metadata) { metatype:[Function:String], type:'body', data: 'status' } '인자에 대한 메타 데이터를 포함한 객체'
        value= value.toUpperCase()

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in the status options`)
        }

        return value
    }
    private isStatusValid(status: any){
        const index = this.StatusOptions.indexOf(status)
        return index !== -1
    }
}