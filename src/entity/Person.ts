import {Column, Entity, PrimaryColumn} from "typeorm";

Entity()
export class Persons {

    @PrimaryColumn({ name: "id" })
    db_id: number;

    //@Column({ name: "book_id" })


    @Column({ name: "first_name", nullable: true })
    firstName: string;

    @Column({ name: "middle_name", nullable: true })
    middleName: string;

    @Column({ name: "last_name", nullable: true })
    lastName: string;

    @Column({ name: "dt" })
    role: string;

}