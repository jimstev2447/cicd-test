const app = require("express")();
const db = require("./db/connection");

app.get("/api/dogs", (req, res, next) => {
  db.query("SELECT * FROM dogs")
    .then(({ rows }) => {
      res.status(200).send({ dogs: rows });
    })
    .catch(next);
});

module.exports = app;
