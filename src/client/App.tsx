import axios from "axios";
import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Book from "../server/entity/Book";

const App = () => {

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
                    <th>Название</th>
                    <th>Жанр</th>
                    <th>Язык</th>
                    <th>Язык оргининала</th>
                    <th>Идентификатор</th>
                    <th>Имя файла</th>
                    <th>Точка входа</th>
                </tr>
                </thead>
                <tbody>
                {books.map( (book) => (
                    <tr>
                        <td key={book.id}>{ book.title }</td>
                        <td>{ book.genre }</td>
                        <td>{ book.language }</td>
                        <td>{ book.sourceLanguage }</td>
                        <td>{ book.guid }</td>
                        <td>{ book.file }</td>
                        <td>{ book.entry }</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default App;
