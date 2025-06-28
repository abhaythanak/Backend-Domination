const express = require("express");
const app = express();
const path = require("path")
const  fs = require("fs");
const { send } = require("process");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
   fs.readdir(`./hisaab`, (err, files)=>{
    if(err) return res.status(500).send(err)
        res.render("index",{files:files})
   })
    
})

app.get("/create",(req,res)=>{
    res.render("creating")
})

app.get("/edit/:filename",(req,res)=>{
    fs.readFile(`./hisaab/${req.params.filename}`,"utf8", (err, filedata)=>{
        if(err) return res.status(500).send(err)
            res.render("editing",{filedata,  filename: req.params.filename })
       })
   
})

app.post("/createhisaab",(req,res)=>{
    // file name on date
    let currentdate = new Date()
    let date = `${currentdate.getDate()}-${currentdate.getMonth()+1}-${currentdate.getFullYear()}`
    // res.send(req.body)
    fs.writeFile(`./hisaab/${date}.txt`,req.body.content, (err)=>{
        if(err) return res.status(500).send(err);
        res.redirect("/")
    })
})

app.post("/update/:filename",(req,res)=>{
    fs.writeFile(`./hisaab/${req.params.filename}`, req.body.content, (err)=>{
        if(err) return res.status(500).send(err)
            res.redirect("/")
       })
   
})
app.listen(3000)