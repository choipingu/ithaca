import {Entity ,PrimaryGeneratedColumn, OneToMany ,Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {Content} from './Content'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    nickname!: string;

    @Column()
    password!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(type=>Content,content=>content.user)
    contents!: Content[]

}
