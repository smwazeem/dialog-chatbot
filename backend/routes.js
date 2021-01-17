const express = require('express');
const routes = express.Router();

const ToBot = require('./routes/route.dialogbot.request');

routes.use('/send',ToBot);

module.exports = routes;