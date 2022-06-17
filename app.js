// Sigma Rules API

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));

// database connection
mongoose.connect(`mongodb+srv://admin_subhranshu:${process.env.DB_KEY}@cluster0.one0j.mongodb.net/sigmarulesDB`);

const ruleSchema = {
    rule: String
}

const Rule = new mongoose.model("rule",ruleSchema);

app.get("/",(req,res)=>{
    res.render("home");
});

app.route("/sigmarule")
.get((req,res)=>{
    Rule.find((err,foundRule)=>{
        if(err){
            res.send(err);
        }else{
            res.send(foundRule);
        }
        // let randomNum = Math.floor()
    });
 
})

.post((req,res)=>{
    const newRule = new Rule({
        rule: req.body.rule
    });

    newRule.save((err)=>{
        if (err) {
            res.send(err);
            // console.log("Error in saving Data.");
            
        }else{
            res.send("Data received! and saved.");
            // console.log("Data received and saved. POST method!");

        }
    });
});

app.get("/sigmarule/random",(req,res)=>{
    Rule.find((err,foundRule)=>{
        if(err){
            res.send(err);
        }else{
            res.send(foundRule);
        }
    }).limit(1).skip(Math.floor(Math.random() * 30)); // change the limit number acording your data.
})


app.listen(3000,()=>{
    console.log("===> Live on port 3000")
})