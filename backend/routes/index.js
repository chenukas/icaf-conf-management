const healthCheckRouter = require("./healthcheck.routes");
const userRouter = require("./user.routes");
const eventRouter = require("./event.routes");
const fileRouter = require('./files.routes');
const statisticRouter = require('./statistic.routes')

const init = (app) => {
  app.use(healthCheckRouter);
  app.use(userRouter);
  app.use(eventRouter);
  app.use(fileRouter);
  app.use(statisticRouter)
};

module.exports = init;
