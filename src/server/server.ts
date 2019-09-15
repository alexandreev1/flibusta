// @ts-ignore
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log(`##### app on the port ${ port } now #####`);
});
