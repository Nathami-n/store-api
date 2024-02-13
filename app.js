const express = require("express");
const path = require("path");
const { loggerItemFunction } = require("./middleware/logEventsMiddleware");
const errorHandler = require("./middleware/errorEventEmitter");
const connectDB = require("./db/connect");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//server static files
app.use(express.static(path.join(__dirname, "public")));

//parse json data
app.use(express.json());

//middleware for logging events
app.use(loggerItemFunction);

// app.use("/", (req, res) => {
//   res.status(200).json({ message: "success" });
// });

app.use('/api/v1/products', require('./routes/productsRoute'))

//logError if it occurs
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log('connection successful')
      console.log(`running on ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};

startServer();


