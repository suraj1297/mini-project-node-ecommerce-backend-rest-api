const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const productRouter = require("./controller/ProductRoutes")

app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

app.use("/products", productRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log(`App listening on port 3000!`))