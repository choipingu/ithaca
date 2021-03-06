import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    userid: string

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    nickname: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: 'password only accepts english and number'
    })
    password: string
}
export class UserLoginDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    userid: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: 'password only accepts english and number'
    })
    password: string
}



// dto에서 클래스 사용 이유는 인터페이스와 다르게 런타임에서 작동하기 때문에 파이프 같은 기능을 이용할 때 더 유용함
// dto 는 수정할수 있는 class를 한번에 관리하는곳