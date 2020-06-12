const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))




app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})


app.post("/", function(req, res){
  console.log(req.body.cityName)
  const query = req.body.cityName
  const apiKey = "9b5d6f97ddceebd652d1cc990a15e92e"
  const units = "metric"
  const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&units="+units + "&appid="+apiKey

  https.get(weatherURL, function(response){
    console.log(response.statusCode)
    response.on("data", function(data) {
      const weatherData =  JSON.parse(data)
      console.log(weatherData)
      const temp = weatherData.main.temp
      res.send("<h1>The temperature in " + query+ " is " + temp + " degrees </h1>")
    })

})

})


/*
https.get(weatherURL, function(response){
  console.log(response.statusCode)
  response.on("data", function(data) {
    const weatherData =  JSON.parse(data)
    console.log(weatherData)
    const temp = weatherData.main.temp
    res.send("<h1>The temperature in Moron is " + temp + " degrees </h1>")
  })

})
*/

app.listen(3000, function(){
  console.log("Server is running on port 3000")
})
