import express from "express";
import "reflect-metadata";
import {createConnection} from "typeorm";
import Book from "./entity/Book";
const app = express();
const port = 3000;

createConnection()
    .then(
        async (connection) => {
            const bookRepository = connection.getRepository(Book);
            const books = await bookRepository.find({ relations: ["persons"], take: 1000 });

            app.get("/api/books", (req, res) => {
                res.send(JSON.stringify(books));
            });

            app.listen(3000, () => {
                // tslint:disable-next-line:no-console
                console.log(`##### app on the port ${ port } now #####`);
            });

        })
    .catch((error) => {
            // tslint:disable-next-line:no-console
            console.log(error);
        }
    );
