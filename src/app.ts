import express, {
  application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";

import { Post, User, Prisma } from "./generated/prisma/client";

type PostCreateInput = Prisma.PostCreateInput;
type UserCreateInput = Prisma.UserCreateInput;
// 업데이트시 선택적 필드들
type PostUpdateInput = Prisma.PostUpdateInput;

const app = express();

console.log("process.env.NODE_ENV::", process.env.NODE_ENV);

app.get("/users/:id", (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  res.json({ userId });
});

// 미들웨어의 매개변수에 해당하는 타입 정의 시에도 interface 사용을 권장
interface CreateUserBody {
  name: string;
  email: string;
  age: number;
}

app.get(
  "/search",
  (
    req: Request<{}, {}, {}, { keyword: string; page?: number }>,
    res: Response,
  ) => {
    const { keyword, page } = req.query;
    res.json({ keyword, page });
  },
);

function hello(req: Request, res: Response, next: NextFunction) {
  req.valid;
  res.send("Hello");
}

const bye: RequestHandler = (req, res, next) => {
  res.send("Bye");
};

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
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
