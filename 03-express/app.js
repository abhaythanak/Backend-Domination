const express = require("express");
const app = express();

 // app.get(route,handler)
app.get('/',function(req,res){
    res.send('Hello World 03')
});

app.listen(3000);