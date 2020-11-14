const mongoose = require("mongoose")

const url = "mongodb+srv://admin:root@testing.l4cpi.mongodb.net/ecommerce?retryWrites=true&w=majority"

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(response => console.log("Connected to database successfully"))
    .catch(error => console.log("Error while connecting", error))

module.exports = mongoose