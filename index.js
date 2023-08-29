const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const  Connection  = require("./db");
const router =require("./Routes/routeRouter")
app.use("/route",router)

app.listen(process.env.port, async () => {
  await Connection;
  console.log("Connection established");
  console.log("listening on", process.env.port);
});
