import { Board } from "src/boards/board.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserStatus } from "./user-status-validation";


@Entity()
@Unique(['userid'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userid:string;

    @Column()
    nickname:string;
    
    @Column()
    password:string;
    
    @Column()
    status: UserStatus;

    @OneToMany(type => Board, board=>board.user, {eager: true})
    board: Board[]
}