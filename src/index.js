const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const moment = require("moment")

dotenv.config()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

const { todosRoutes } = require("./routes")

app.use("/todos", todosRoutes)

app.listen(PORT, () => {
    console.log("Listening in port", PORT)
})