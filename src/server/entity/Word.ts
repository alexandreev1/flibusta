import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export default class Word {

    @PrimaryColumn()
    public id: number | null;

    @Column({ nullable: true })
    public value: string | null;

}
