import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Files {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    done: number;

}