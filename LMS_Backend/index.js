const express = require("express");
const { connection } = require("./configs/db");
const {productRoute} = require("./Routes/product.routes")
require('dotenv').config()
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())
app.use("/product",productRoute)




app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log("cannot connect to db");
    console.log("error in index file", err);
  }
  console.log(`server is running at port ${process.env.port}`,);
});
