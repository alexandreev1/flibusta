import axios from "axios";
import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Book from "../server/entity/Book";

const BookTable = () => {

const [books, setBooks] = useState<Book[]>([]);

async function getBooks() {
    try {
        const response = await axios.get("http://localhost:3000/api/books");
        setBooks(response.data);
    } catch (e) {
        throw new Error(`Была обнаружена ошибка ${e}. Пожалуйста, проверьте правильность выполнения запроса.`);
    }
}

useEffect(() => { getBooks(); }, []);

return(
    <div>
        <Table striped bordered hover  size="sm" variant="dark">
            <thead>
            <tr>
                <th className="text-center">Название</th>
                <th className="text-center">Жанр</th>
                <th className="text-center">Язык</th>
                <th className="text-center">Язык оргининала</th>
                <th className="text-center">Идентификатор</th>
                <th className="text-center">Имя файла</th>
            </tr>
            </thead>
            <tbody>
            {books.map( (book) => (
                <tr>
                    <td key={book.id}>{ book.title }</td>
                    <td className="text-center">{ book.genre }</td>
                    <td className="text-center">{ book.language }</td>
                    <td className="text-center">{ book.sourceLanguage }</td>
                    <td className="text-center">{ book.guid }</td>
                    <td className="text-center">{ book.entry }</td>
                </tr>
            ))}
            </tbody>
        </Table>
    </div>
);
};

export default BookTable;
