const express = require("express");
const app = express();
app.use(express.json());
app.use(express.json());
const notes = [];
//POST-create a note
app.post("/notes", function (req, res) {
  const note = req.body.note;
  notes.push(note);
  return res.json({
    message: "Note added",
  });
});

//GET- get all my notes note
app.get("/allnotes", function (req, res) {
  return res.json({
    notes: notes,
  });
});
app.get("/", function (req, res) {
  res.sendFile("C:/Users/Asus/Videos/b/week 9/frontend/index.html");
});
app.listen(3000);
