import {Entity, PrimaryGeneratedColumn, ManyToOne , Column, CreateDateColumn, UpdateDateColumn, JoinColumn} from "typeorm";
import {User} from './User'

@Entity()
export class Content {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    main!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => User, user=>user.contents)
    user!: User;
}
