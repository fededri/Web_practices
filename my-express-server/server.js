const express = require('express')

const app = express()

app.get("/", function (request, response) {
    response.send("<h1>Hello world!</h1>");
})

app.get("/about", function (req,response) {
    response.send("I am Federico Torres")
})

app.listen(3000, function (params) {
    console.log("Server started on port 3000")
});