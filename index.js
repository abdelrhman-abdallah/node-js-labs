const http = require("http");
const queryString = require("querystring");
const fs = require("fs");
const getGreeting = require("./figureTime");
const saveNewUser = require("./saveNewUser");
const displayUserList = require("./displayUserList");
const { URLSearchParams } = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const date = new Date();
    let greeting = getGreeting(date);
    displayUserList(req, res, greeting);
  } else if (req.url === "/createNewUser" && req.method === "GET") {
    res.write(`<html>
          <head>
            <title>List of Users</title>
          </head>
          <body>
            <h1>New User Data</h1>
            <form method="POST" action="/saveNewUser">
            <label for="username">UserName: </label>
            <input type="text" name="username" id="username" />
            <label for="position">Position: </label>
            <input type="text" name="position" id="position" />
            <button type="submit">Create New User</button>
          </form>
          </body>
        </html>`);
    res.statusCode = 201;
    return res.end();
  } else if (req.url === "/saveNewUser" && req.method === "POST") {
    saveNewUser(req, res);
  }
});

server.listen(3001, () => {
  console.log(`Serve is up and Listenning on Port 3001`);
});
