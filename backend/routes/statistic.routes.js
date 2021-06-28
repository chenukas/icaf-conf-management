const router = require("express").Router();
const statisticController = require('../controllers/statistic.controller')

router.get('/stats', statisticController.getStatistics)

module.exports = router