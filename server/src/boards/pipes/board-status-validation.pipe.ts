import { BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform{

    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
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