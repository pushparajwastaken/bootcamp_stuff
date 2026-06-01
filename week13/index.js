const express = require("express");
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: "sfdsdgsdfsdfs",
});

const app = express();
app.use(express.json());

app.post("/sign-up", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const response = await pool.query(
    `INSERT INTO users (username,email,password) VALUES($1,$2,$3)RETURNING id  );`,
    [username, email, password],
  );
  res.json({
    message: "Signup Done",
    id: response.rows[0].id,
  });
});
app.post("/sign-in", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const response = await pool.query(
    `SELECT * FROM users WHERE email='${email}' AND password='${password}`,
  );
  console.log(response);
  const userExists = response.rows[0];
  if (!userExists) {
    res.status(403).json({
      message: "Incorrect Creds",
    });
  } else {
    res.json({
      message: "Sign In Successfull",
      token: "dwfewgerfewrewqrwefw",
    });
  }
});

app.listen(3000, () => {
  console.log("App is listening at port 3000");
});
