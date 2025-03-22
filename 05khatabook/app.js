const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/",(req, res)=>{
    // res.send("hey");
    fs.readdir(`./files`,function(err, files){
        res.render("index",{files})
    })
});

app.get("/create",(req, res)=>{
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2,'0')
    const month = String(currentDate.getMonth()+1).padStart(2,'0')
    const year = currentDate.getFullYear()

    const fn = `${day}-${month}-${year}.txt`

    fs.writeFile(`./files/${fn}`,"daal bati churma", function(err) {
        if(err) return res.send("somthing went wrong")
        else res.send("done")    
    })
});

app.listen(3000)