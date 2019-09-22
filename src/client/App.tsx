import React from "react";
import Book from "../server/entity/Book";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export interface App {
    book: Book[]
}

const App: React.FC<App> = ({ book }) => {

    return(
        <div>Hello world!
            <Tabs
                justify
                className="bg-dark"
                id="books"
            >
                <Tab
                    title="Книги"
                    tabClassName="customTab"
                >
                    <div className="books-grid">
                        <div className="books-grid-row">
                            <div>Название</div>
                            <div className="text-center">Жанр</div>
                            <div className="text-center">Язык</div>
                            <div className="text-center">Язык оргининала</div>
                            <div className="text-center">Идентификатор</div>
                            <div className="text-center">Имя файла</div>
                            <div className="text-center">Точка входа</div>
                        </div>
                        {book.map( books => (
                            <div className="books-grid-row">
                                <div>{ books.title }</div>
                                <div className="text-center">{ books.genre }</div>
                                <div className="text-center">{ books.language }</div>
                                <div className="text-center">{ books.sourceLanguage }</div>
                                <div className="text-center">{ books.guid }</div>
                                <div className="text-center">{ books.file }</div>
                                <div className="text-center">{ books.entry }</div>
                            </div>
                        ))}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default App;
