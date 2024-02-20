const todoRouter = require("./todo");

const route = (app) => {
  // Todo route
  app.use("/", todoRouter);
};

module.exports = route;
