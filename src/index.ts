import "reflect-metadata";
import {createConnection} from "typeorm";
import Book from "./entity/Book";

createConnection()
    .then(
        async (connection) => {
            const bookRepository = connection.getRepository(Book);
            const books = await bookRepository.find({ relations: ["persons"], take: 100 });
            // tslint:disable-next-line:no-console
            console.log("Loaded books: ", books[0].persons[0].firstName);
        })
    .catch((error) => {
            // tslint:disable-next-line:no-console
            console.log(error);
        }
    );
