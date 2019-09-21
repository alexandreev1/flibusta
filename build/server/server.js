"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Book_1 = __importDefault(require("./entity/Book"));
const app = express_1.default();
const port = 3000;
typeorm_1.createConnection()
    .then((connection) => __awaiter(this, void 0, void 0, function* () {
    const bookRepository = connection.getRepository(Book_1.default);
    const books = yield bookRepository.find({ relations: ["persons"], take: 1000 });
    app.get("/api/books", (req, res) => {
        res.send(JSON.stringify(books[0].persons));
    });
    app.listen(3000, () => {
        // tslint:disable-next-line:no-console
        console.log(`##### app on the port ${port} now #####`);
    });
}))
    .catch((error) => {
    // tslint:disable-next-line:no-console
    console.log(error);
});
//# sourceMappingURL=server.js.map