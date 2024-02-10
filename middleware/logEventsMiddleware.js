const path = require("path");
const { appendFile, mkdir } = require("fs").promises;
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const { existsSync } = require("fs");

const logItemFunction = async (message, logname) => {
  const date = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logItem = `${data}\t ${uuid()} \t${message}\n`;
  try {
    if (!existsSync(path.join(__dirname, "..", "logs"))) {
      await mkdir(path.join(__dirname, "..", "logs"));
    }

    await appendFile(path.join(__dirname, "..", "logs", logname), logItem);
  } catch (err) {
    console.error(err);
  }
};

const loggerItemFunction = (req, res, next) => {
    logItemFunction(`${req.method} ${req.headers.origin} ${req.url}`, 'Logs.txt');
  next();
};


module.exports = {logItemFunction, loggerItemFunction}