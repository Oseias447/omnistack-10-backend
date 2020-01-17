const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://amendoim:amendoim@cluster0-szfrq.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.set("useCreateIndex", true);

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(routes);

app.listen(3333);
