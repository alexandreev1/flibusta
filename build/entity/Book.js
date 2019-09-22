"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const File_1 = __importDefault(require("./File"));
const Person_1 = __importDefault(require("./Person"));
let Book = class Book {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "genre", void 0);
__decorate([
    typeorm_1.Column({ name: "lang" }),
    __metadata("design:type", String)
], Book.prototype, "language", void 0);
__decorate([
    typeorm_1.Column({ name: "src_lang" }),
    __metadata("design:type", String)
], Book.prototype, "sourceLanguage", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Book.prototype, "sequence", void 0);
__decorate([
    typeorm_1.Column({ name: "sequence_num", nullable: true }),
    __metadata("design:type", String)
], Book.prototype, "sequenceNum", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "guid", void 0);
__decorate([
    typeorm_1.Column({ name: "file" }),
    __metadata("design:type", Number)
], Book.prototype, "fileId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => File_1.default, (file) => file.books),
    typeorm_1.JoinColumn({ name: "file" }),
    __metadata("design:type", File_1.default)
], Book.prototype, "file", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "entry", void 0);
__decorate([
    typeorm_1.OneToMany(() => Person_1.default, (person) => person.book),
    __metadata("design:type", Array)
], Book.prototype, "persons", void 0);
Book = __decorate([
    typeorm_1.Entity()
], Book);
exports.default = Book;
//# sourceMappingURL=Book.js.map