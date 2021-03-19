var express=require('express');
var app=express();
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/2",function(req,res){
    res.render("successfulPayment.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("Server has been started");
});