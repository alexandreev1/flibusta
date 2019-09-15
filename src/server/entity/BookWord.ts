import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export default class BookWord {

    @PrimaryColumn({ name: "word_id" })
    public wordId: number | null;

    @PrimaryColumn({ name: "book_id" })
    public id: number | null;

    @Column({ nullable: true })
    public amount: number | null;

}
