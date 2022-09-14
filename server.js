const express = require("express");

const app = express();

// we are creating the various icon on a web page.
app.get("/", function(req, res) {          //app.get("/") is our localhost that should display our home page
    res.send("<h1>The Boy is Good</h1> <br> <p> i like rice and beans</p>")       //res = request and rep = response.. this is what you see most time in other people code out there.
}); 

app.get("/contact", function(req, res) {
    res.send("contact me at: alexzzy.30@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("About the Web Developer: <br> My name are alex teghware im a web devloper currebtly understudy with App Brewery London. and i love my tutor so much, because she is amazing thank you")
});

app.get("/hobbies", function(req, res) {
    res.send("Here are my Hobbies <ul><li>Driving</li><li>Travelling</li><li>Coding</li></ul>")
});

app.listen(3000, function() {
    console.log("sever started on a port 3000")
});
