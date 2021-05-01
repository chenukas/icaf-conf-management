const healthCheckRouter = require("./healthcheck.routes");

const init = (app) => {
  app.use(healthCheckRouter);
};

module.exports = init;
