const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('Public'));

app.listen(3000, ()=> {
console.log('servidor funcionando')
});

app.get('/', (req,res) =>{ 
    res.sendFile(path.join(__dirname, '/Views/index.html'))
    });
