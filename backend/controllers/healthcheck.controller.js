const healthCheck = async (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };

  try {
    res.send(healthcheck);
  } catch (err) {
    healthcheck.message = err;
    res.status(503).send();
  }
};

module.exports = {
  healthCheck,
};
