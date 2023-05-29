const fs = require("fs");

const saveNewUser = (req, res) => {
  fs.readFile("users.json", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const formData = new URLSearchParams(body);
      const username = formData.get("username");
      const position = formData.get("position");
      parsedData.push({ username, position });
      fs.writeFile("users.json", JSON.stringify(parsedData), (err) => {
        console.log(parsedData);
        if (err) {
          res.write(`<html>
          <head>
            <title>Saved User</title>
          </head>
          <body>
            <h1>ERROR ${err} !!!</h1>
            <ul style={display:inline;}>
            <li><a href="/"><button>Check List of Users</button></a></li>
            <li><a href="/createNewUser"><button>Or Try Creating a New User</button></a></li>
            </ul>
          </body>
        </html>`);
        } else {
          res.write(`<html>
          <head>
            <title>Saved User</title>
          </head>
          <body>
            <h1>User was Created and Added</h1>
            <ul style={display:inline;}>
            <li><a href="/"><button>Check Updated Users List</button></a></li>
            <li><a href="/createNewUser"><button>Or Create Another User</button></a></li>
            </ul>
          </body>
        </html>`);
          return res.end();
        }
      });
    });
  });
};

module.exports = saveNewUser;
