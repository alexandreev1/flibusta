"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/any", (req, res) => {
    res.send("Nelechka piska!");
});
app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log(`##### app on the port ${port} now #####`);
});
//# sourceMappingURL=server.js.map