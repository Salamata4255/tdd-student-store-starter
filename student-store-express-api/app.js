// YOUR CODE HERE
const express = require('express')
const morgan = require('morgan')
const store = require("./routes/store")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { NotFoundError } = require("./utils/error.js")

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'))

app.use("/store", store)

app.use(async (_req, _res, next) => {
    return next(new NotFoundError())
})

app.use(async (error, _req, res, _next) => {
    return res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status || 500
        }
    })
})

app.get("/store/:productId", (req, res) => {

})
app.get('/', (req, res) => {
    res.status(200).send({
        ping : "pong"
    })
})

module.exports = app 