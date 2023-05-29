const fs = require("fs");

const displayUsersList = (req, res, greeting) => {
  return fs.readFile("users.json", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    res.write(`<html>
            <head>
              <title>List of Users</title>
            </head>
            <body>
              <h1>${greeting}</h1>
              <h2>Users Data:</h2>
              <ul> 
              ${parsedData.map(
                (user) =>
                  `<li>Name: ${user.username} --- Position: ${user.position}</li>`
              )}
              </ul>
              <a href="/createNewUser"><button>Create New User</button></a>
            </body>
          </html>`);
    return res.end();
  });
};
module.exports = displayUsersList;
