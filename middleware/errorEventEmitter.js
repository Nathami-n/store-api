const { logItemFunction } = require("./logEventsMiddleware");

const errorHandler = (err, req, res, next) => {
    logItemFunction(`${err.name}\t ${err.message}\n`, 'errLogs.txt');
    res.sendStatus(500).send(err.message);
  next();
};


module.exports = errorHandler;