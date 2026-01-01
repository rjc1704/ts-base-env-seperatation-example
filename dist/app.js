"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
console.log("process.env.DATABASE_URL::", process.env.DATABASE_URL);
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.json({ userId });
});
app.get("/search", (req, res) => {
    const { keyword, page } = req.query;
    res.json({ keyword, page });
});
function hello(req, res, next) {
    req.valid;
    res.send("Hello");
}
const bye = (req, res, next) => {
    res.send("Bye");
};
const errorHandler = (err, req, res, next) => {
    res.status(500).send("Error!");
};
app.get("/", (req, res, next) => {
    res.send("OK");
});
app.get("/hello", hello);
app.get("/bye", bye);
app.use(errorHandler);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=app.js.map