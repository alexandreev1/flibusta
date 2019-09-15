import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import Book from "./Book";

@Entity()
export default class File {

    @PrimaryColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public done: number;

    @OneToMany(() => Book, (book) => book.file)
    public books: Book[];

}
