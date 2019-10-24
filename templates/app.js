var express = require("express");
var app = express();

//by default express only serves the views directory on the server and nothing else so to serve other directory(like public) we use the following
app.use(express.static("public"));

app.get("/",function(req,res){
    //to send a dynamic html(template)
    res.render("home.ejs");
});

app.get("/posts/:username",function(req,res){
    var post = [
        {title: "post 1",author: "auth 1"},
        {title: "post 2", author: "auth 2"},
        {title : "mypost", author: "pratt"}
    ];
    //getting the username from the req url and storing in variable.
    var username = req.params.username;
    //to send a dynamic html(template)
    res.render("posts.ejs",{
        username: username, 
        post: post
    });
});

app.get("/lovewith/:thing",function(req,res){

    var thing = req.params.thing;
    //routing params and templates
    res.render("love.ejs",{
        thing: thing
    });
});

//this is the * route ,, this is default route that matches any random url. 
app.get("*",function(req,res){
    res.send("<h1>What are u doing with ur life</h1>");
});

app.listen(3000,() => console.log("up and running"));

