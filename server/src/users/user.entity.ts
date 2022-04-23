import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserStatus } from "./user-status-validation";


@Entity()
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
}