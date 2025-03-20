// const express = require("express");
// const app = express();

//  // app.get(route,request handler(middlewear function))
//  //any function have access req,res,next called middlewear
// app.get('/',function(req,res){
//     res.send('Hello World 03')
// });

// app.get('/about',function(req,res){
//     res.send('Hello World 03 about')
// });

// app.get('*',function(req,res){
//     res.send('baby come')
// })

// app.listen(3000);

//         EJS  form handling

const express = require("express");
const app = express();


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get("/",function(req,res){
    res.render('index')
})

app.post("/create",function(req,res){
   
    console.log(req.body);
    
})

app.listen(3000) 