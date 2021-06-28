const healthCheckRouter = require("./healthcheck.routes");
const userRouter = require("./user.routes");
const eventRouter = require("./event.routes");
const statisticRouter = require("./statistic.routes");
const paymentRouter = require("./payment.routes");

const init = (app) => {
  app.use(healthCheckRouter);
  app.use(userRouter);
  app.use(eventRouter);
  app.use(statisticRouter);
  app.use(paymentRouter);
};

module.exports = init;
