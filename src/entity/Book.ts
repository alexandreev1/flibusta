import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Books {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    genre: string;

    @Column({ name: "lang" })
    language: string;

    @Column({ name: "src_lang"} )
    sourceLanguage: string;

    @Column({ nullable: true })
    sequence: string | null;

    @Column({ nullable: true })
    sequence_num: string | null;

    @Column({ type: "uuid"})
    guid: string;

    @Column()
    file: number;

    @Column()
    entry: string;

}
