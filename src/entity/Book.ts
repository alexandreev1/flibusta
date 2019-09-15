import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
import File from "./File";
import Person from "./Person";

@Entity()
export default class Book {

    @PrimaryColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public genre: string;

    @Column({ name: "lang" })
    public language: string;

    @Column({ name: "src_lang"} )
    public sourceLanguage: string;

    @Column({ nullable: true })
    public sequence: string | null;

    @Column({ name: "sequence_num", nullable: true })
    public sequenceNum: string | null;

    @Column()
    public guid: string;

    @Column({ name: "file" })
    public fileId: number;

    @ManyToOne(() => File, (file) => file.books)
    @JoinColumn({ name: "file" })
    public file: File;

    @Column()
    public entry: string;

    @OneToMany(() => Person, (person) => person.book)
    public persons: Person[];

}
