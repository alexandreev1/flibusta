import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import Book from "./Book";

@Entity()
export default class Person {

    @PrimaryColumn({ name: "id" })
    public dataBaseId: number;

    @Column({ name: "book_id" })
    public id: number;

    @ManyToOne(() => Book, (book) => book.persons)
    @JoinColumn({ name: "book_id" })
    public book: Book;

    @Column({ name: "first_name", nullable: true })
    public firstName: string;

    @Column({ name: "middle_name", nullable: true })
    public middleName: string;

    @Column({ name: "last_name", nullable: true })
    public lastName: string;

    @Column({ name: "dt" })
    public role: string;

}
