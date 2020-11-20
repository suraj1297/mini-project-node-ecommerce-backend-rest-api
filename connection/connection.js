const mongoose = require("mongoose")

const url = process.env.URL

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(response => console.log("Connected to database successfully"))
    .catch(error => console.log("Error while connecting", error))

module.exports = mongoose
