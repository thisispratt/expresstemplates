var express = require("express");
var app = express();


//routes

app.get("/",(req,res) => res.send("Hii there, Welcome to My assignment!"));

app.get("/speak/:animals", function(req,res){
    var animal = (req.params.animals).toLowerCase();
    var sound = "";
    // var sound = {
    //     dog: "woof woof!",
    //     cat: "Meow",
    //     pig: "Oink!",
    //     fish: "...",
    //     parrot: "chukle"
    // };
    switch (animal) {
        case "dog":
            sound = "woof woof!";
            break;
        case "cat":
            sound = "meow!";
            break;
        case "pig":
            sound = "Oink!";
            break;
        case "fish":
            sound = "...";
            break;
        case "parrot":
            sound = "chuckle";
            break;

        default:
            sound = "something!!";
            break;
    }

    var str = ("\"The " + animal + " says "+sound);
    
    res.send(str);
    // if(animal === "dog"||"Dogs"||"DOGS"){
    //     res.send(str + "'woof! woof!'\"");
    // }
    // if(animal === "pig"||"Pig"||"PIG"){
    //     res.send(str + "'oink!'\"");
    // }
    // if(animal === "cow"||"Cow"||"COW"){
    //     res.send(str + "'mow'\"");
    // }
});

app.get("/repeat/:strin/:no",function(req,res){
    var n = parseInt(req.params.no);
    var str1 = req.params.strin;
    var mess = "";

    for(let i = 0; i < n; i++){
        mess += " "+str1;
    }
    res.send(mess);
});

app.get("*",(req,res) => res.send("Sorry, Page not found!.. What are u doing with your life?"));

app.listen(3000,() => console.log("Server running at 3000"));