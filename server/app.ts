import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
const app: Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const priorities = [
  {
    name: "Urgent",
    label: "danger",
  },
  {
    name: "Regular",
    label: "warning",
  },
  {
    name: "Trivial",
    label: "primary",
  },
];

app.get("/", (req: Request, res: Response) => {
  return res.json({ heath: "ok" });
});

app.get("/priorities", (req: Request, res: Response) => {
  return res.json({
    data: priorities,
  });
});

app.listen(port, (): void => {
  return console.log(`server is listening on ${port}`);
});
