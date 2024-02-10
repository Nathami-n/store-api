const express = require("express");
const { loggerItemFunction } = require("./middleware/logEventsMiddleware");
const errorHandler = require("./middleware/errorEventEmitter");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//server static files
app.use(express.static(path.join(__dirname, "public")));

//parse json data
app.use(express.json());

//middleware for logging events
app.use(loggerItemFunction);

app.use('/', (req,res)=> {
    req.status(200).json({message:'success'})
})

//logError if it occurs
app.use(errorHandler);
app.listen(PORT, () => {
  `listening on port ${PORT}`;
});
