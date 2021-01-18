//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(request, response){

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);


    response.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(request, response){
    let item = request.body.newItem;

    if (request.body.list === "Work"){
        workItems.push(item);
        response.redirect("/work");
    } else {
      items.push(item);
      response.redirect("/");    
    }
    
});

app.get("/work", function(request, response){
    response.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(request, response){
    response.render("about");
});


app.post("/work", function(request, response){
    let item= request.body.newItem;
    workItems.push(iten);
    response.redirect("/work");

});

app.listen(3030, function(){
    console.log("Server is running on port 3000");
});

