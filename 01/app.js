//  const { log } = require('console');
const fs = require('fs');

 //   create file
//  fs.writeFile("abcd.txt","hey hello",function(err) {
//     if (err) console.log(err);
//     else console.log("file created")
//  })

// fs.readFile("abcd.txt","utf8", function(err,data){
//     if (err) console.log(err)
//     else console.log(data)
// })

// fs.appendFile("abcd.txt"," appended data",function(err){
//     if(err) console.log(err);
//     else console.log("appended data");
        
// })

// fs.rename("abcd.txt","hey.txt",function(err){
//     if(err) console.log(err);
//     else console.log("rename completed")
// })

// for delete file
// fs.unlink("hey.txt",function(err){
//     if(err) console.log(err)
//     else console.log("file deleted")    
// })

// for folder folder
// fs.mkdir("hey",function(err){
//     if(err) console.log(err)
//     else console.log("file deleted")    
// })

// // for read folder
// fs.readdir("hey",{withFileTypes:true},function(err,files){
//     if(err) console.log(err)
//     else console.log(files)    
// })

// for delete folder   rmdir is deprecated use only rm
// fs.rm("hey",{recursive: true},function(err){
//     if(err) console.log(err)
//     else console.log("files deleted")    
// })