const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const https = require('https')


const PORT_NUMBER = process.env.PORT || 3000
const app  = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email

    const data = {
        members : [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data)
    const url = "https://us19.api.mailchimp.com/3.0/lists/63a43da763"
    const options = {
        method: 'POST',
        auth: "federico:1b6064247e2e0c72e500d4a2bab92ddc-us1"
    }
    const request = https.request(url, options, function(response){
        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html")
        } else {
            res.sendFile(__dirname + "/failure.html")
        }
        response.on('data', function(data){
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
})

app.listen(PORT_NUMBER, function(){
    console.log("Started server on port " + PORT_NUMBER)

})


app.post("/failure", function(req, res){
    res.redirect("/")
})



//Api key
//1b6064247e2e0c72e500d4a2bab92ddc-us19

//list id
//63a43da763