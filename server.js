const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/ToDoRoute")
const cors = require("cors");
require('dotenv').config()

const PORT = process.env.PORT || 6221

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to MongoDB!`))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on : ${PORT}`))