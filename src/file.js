const fs = require('fs');    

fs.mkdir('./src/data', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Directory created successfully');
})

fs.writeFile('src/data/demo.txt','Hello', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('File is ceated');
})  

fs.appendFile('src/data/demo.txt', ' Hi', (err) => {
    if(err) {
        console.log(err);
    }
    console.log("File  is append");
})

fs.readFile('src/data/demo.txt', 'utf-8', (err,data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
})

// fs.unlink('src/data/demo.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("File is deleted");
// })