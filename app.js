const app = require("express")();
const { capitalise } = require("./utils/util");

app.get("/api", (req, res, next) => {
  try {
    const partOfGreeting = "worldzzzzzzzz";
    const greeting = "hello";
    const body = {};
    body.message = capitalise(greeting) + " " + partOfGreeting;
    res.status(200).send(body);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
