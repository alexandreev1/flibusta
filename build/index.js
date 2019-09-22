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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Book_1 = __importDefault(require("./entity/Book"));
typeorm_1.createConnection()
    .then((connection) => __awaiter(this, void 0, void 0, function* () {
    const bookRepository = connection.getRepository(Book_1.default);
    const books = yield bookRepository.find({ relations: ["persons"], take: 100 });
    // tslint:disable-next-line:no-console
    console.log("Loaded books: ", books[0].persons[0].firstName);
}))
    .catch((error) => {
    // tslint:disable-next-line:no-console
    console.log(error);
});
//# sourceMappingURL=index.js.map