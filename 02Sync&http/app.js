// const fs = require('fs');

// fs.writeFileSync("hey.txt","whatever")
// console.log("created");

// readFileSync  ==  "utf8"

const http = require('http')

let server = http.createServer(function(req,res){
    res.end("hellow")
})

server.listen(3000);