// Sigma Rules API

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
require("dotenv").config();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));

// cookies session

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
    // cookie: { secure: true }
  }));

  app.use(passport.initialize());
  app.use(passport.session());

// database connection
mongoose.connect(`mongodb+srv://admin_subhranshu:${process.env.DB_KEY}@cluster0.one0j.mongodb.net/sigmarulesDB`);

const ruleSchema = {
    rule: String
}

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const Rule = new mongoose.model("rule",ruleSchema);
const User = new mongoose.model("user",userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
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
 
});

app.get("/submit",(req,res)=>{
    if(req.isAuthenticated()){
        res.render("submit");
    }else{
        res.redirect("/login");
    }
});

app.post("/submit",(req,res)=>{
    const newRule = new Rule({
        rule: req.body.rule
    });

    if(req.isAuthenticated()){
        newRule.save((err)=>{
            if (err) {
                res.send(err);
                
            }else{
                res.redirect("submit");
            }
        });
    }else{
        res.redirect("/login");
    }

});

app.get("/sigmarule/random",(req,res)=>{
    Rule.find((err,foundRule)=>{
        if(err){
            res.send(err);
        }else{
            res.send(foundRule);
        }
    }).limit(1).skip(Math.floor(Math.random() * 30)); // change the limit number acording your data.
});

app.get("/register",(req,res)=>{
    // res.render("register");
    res.send("Sorry! Only for Admin.");
})

app.post("/register",(req,res)=>{
    User.register({username:req.body.username},req.body.password,(err,u)=>{
        if(err){
            res.send(err);

        }else{
            // passport.authenticate("local")(req,res,()=>{
            //     res.send("Register Successful.");
            // });
            res.send("Sorry! Only For Admin.");
        }
    })
});

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",(req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user,(err)=>{
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req,res,()=>{
                res.redirect("submit");
            })
        }
    });
});

app.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            res.send(err);
        }else{
            res.redirect("login");
        }
    });
});


app.listen(process.env.PORT || 3000,()=>{
    console.log("===> Live on port 3000")
});