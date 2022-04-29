import { ConflictException, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto, UserLoginDto } from "./dto/user.dto";
import { UserStatus } from "./user-status-validation";
import { User } from "./user.entity";
import * as bcrypt from 'bcryptjs'
import { JwtService } from "@nestjs/jwt";


@EntityRepository(User)
export class UserRepository extends Repository<User> {
    private jwtService: JwtService;

    async signUp(createUserDto:CreateUserDto) : Promise <User> { // 유저 추가
        const { nickname,userid,password } = createUserDto
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password,salt)
        const user = this.create({
            nickname,
            password:hashedPassword,
            userid,
            status: UserStatus.ACTIVE
        })
        
        try{
            await this.save(user)
            return user
        } catch (err) {
            console.log(err)
            if(err.code==='23505'){
                throw new ConflictException('Existing userid')
            } else {
                throw new InternalServerErrorException()
            }
        }
    }
    async getUserById(id:number): Promise<User>{ //특정 유저 찾기
        const found = await this.findOne(id)
        if(!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
        return found
    }
    async deleteUser(id:number): Promise<void>{ // 특정 유저 삭제
        const result = await this.delete(id)

        if(result.affected === 0 ){
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
    }
    async updateUserStatus(id:number,status:UserStatus): Promise<User>{
        const user = await this.getUserById(id)
        user.status=status
        await this.save(user)
        return user
    }
    // async signIn(userLoginDto:UserLoginDto): Promise<{accessToken:string}>{
    //     const { userid, password } = userLoginDto
    //     const user = await this.findOne({ userid })

    //     if(user && (await bcrypt.compare(password, user.password ))){

    //         const payload={userid}
    //         const accessToken= await this.jwtService.sign(payload)
    //         return {accessToken:accessToken}
    //     } else {
    //         throw new UnauthorizedException('login failed')
    //     }
    // }
}
