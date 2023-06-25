const express = require("express");
const app = express();
const path = require("path");
const GetGreeting = require("./figureTime.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [
  { username: "Ahmed", position: "Junior DevOps Engineer" },
  { username: "Hamada", position: "Senior DevOps Engineer" },
  { username: "Mahmoud", position: "Junior React Developer" },
  { username: "Lamees", position: "Senior React Developer" },
  { username: "Menna", position: "Junior Software Engineer" },
  { username: "Hager", position: "Senior Software Engineer" },
  { username: "Abdelrhman", position: "Junior Data Engineer" },
];

app.get("/users", (req, res) => {
  const date = new Date();
  let greeting = GetGreeting(date);
  res.render("index", { greeting, listOfUsers: users });
});
app.get("/newuser", (req, res) => {
  res.render("create");
});
app.post("/newuser", (req, res) => {
  const { username, position } = req.body;
  if (username && position) {
    users.push({ username: username, position: position });
    res.render("added");
  } else {
    res.render("failed");
  }
});
app.get("/", (req, res) => {
  const date = new Date();
  let greeting = GetGreeting(date);
  res.render("index", { greeting, listOfUsers: users });
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
