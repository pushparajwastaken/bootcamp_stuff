import express from "express";
const app = express();
app.use(express.json());
interface SignUpInput {
  username: string;
  password: string;
}
app.post("/signup", (req, res) => {
  const body: SignUpInput = req.body;
  //push to db
  res.json({ message: "Signed Up" });
});
app.listen(3000);
enum Direction {
  Up = 1, //1
  Down, //2
  Left, //3
  Right, //4
}
