const app = require("express")();
const { capitalise } = require("./utils/util");

app.get("/api", (req, res, next) => {
  try {
    const greeting = "hello world";
    const body = {};
    body.message = capitalise(greeting);
    res.status(200).send(body);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
