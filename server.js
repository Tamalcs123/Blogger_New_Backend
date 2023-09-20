const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const compression = require('compression')

//env config
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
connectDB();

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(compression());

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

// Port
const PORT = process.env.PORT || 5000;
//listen
app.listen(PORT, () => {
  console.log(`Server Running on port no ${PORT}`.bgCyan.white);
});
