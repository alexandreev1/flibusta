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
const Book_1 = __importDefault(require("./Book"));
let Person = class Person {
};
__decorate([
    typeorm_1.PrimaryColumn({ name: "id" }),
    __metadata("design:type", Number)
], Person.prototype, "dataBaseId", void 0);
__decorate([
    typeorm_1.Column({ name: "book_id" }),
    __metadata("design:type", Number)
], Person.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Book_1.default, (book) => book.persons),
    typeorm_1.JoinColumn({ name: "book_id" }),
    __metadata("design:type", Book_1.default)
], Person.prototype, "book", void 0);
__decorate([
    typeorm_1.Column({ name: "first_name", nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ name: "middle_name", nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column({ name: "last_name", nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ name: "dt" }),
    __metadata("design:type", String)
], Person.prototype, "role", void 0);
Person = __decorate([
    typeorm_1.Entity()
], Person);
exports.default = Person;
//# sourceMappingURL=Person.js.map