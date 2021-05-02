const healthCheckRouter = require("./healthcheck.routes");
const userRouter = require("./user.routes");

const init = (app) => {
  app.use(healthCheckRouter);
  app.use(userRouter);
};

module.exports = init;
