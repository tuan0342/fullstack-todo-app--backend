const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db/index");
const routes = require("./routes/index");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(morgan("common"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

// Routes init
routes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
