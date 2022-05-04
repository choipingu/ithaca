import { User } from "src/users/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "./board-status.enum";

@Entity()
export class Board extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;
    
    @Column()
    description:string;

    @Column()
    tag:string;
    
    @Column()
    status: BoardStatus;

    @ManyToOne(type => User, user=>user.board,{eager:false})
    user:User
}