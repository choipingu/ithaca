import { NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserStatus } from "./user-status-validation";
import { User } from "./user.entity";


@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async createUser(createUserDto:CreateUserDto) : Promise <User> {
        const { nickname,username,password } = createUserDto
        const user = this.create({
            nickname,
            password,
            username,
            status: UserStatus.ACTIVE
        })
        await this.save(user)
        return user
    }
    async getUserById(id:number): Promise<User>{ //특정 유저 찾기
        const found = await this.findOne(id)
        if(!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
        return found
    }
    async deleteUser(id:number): Promise<void>{
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
}
