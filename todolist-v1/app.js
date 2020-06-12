const express = require('express')
const bodyParser = require('body-parser')

let items = []
let workItems = []
const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')



app.get("/", function (req, res) {
    var today = new Date()
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var currentDayName =  today.toLocaleDateString("en-US", options)
    res.render("list", { listTitle: currentDayName, items: items  })
})


app.post("/tasks/new", function (req, res) {

    if(req.body.list === "Work"){
        workItems.push(items)
        res.redirect("/work")
    } else {
        items.push(req.body.task)
    res.redirect("/")
    }
})

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", items: items})
})


app.post("/work", function (req,res) {
    let item = req.body.task
    workItems.push(item)
    res.redirect("/work")
})

app.listen(3000, function (req, res) {
    console.log("server started on port 3000")
})


