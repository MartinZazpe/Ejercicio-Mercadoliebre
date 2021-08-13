const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, ()=> {
console.log('servidor funcionando')
});


app.use(express.static(path.join(__dirname,'Public')));


app.get('/', (req,res) =>{ 
    res.sendFile(path.join(__dirname, '/Views/index.html'))
    });

    app.get('/register', (req,res) =>{ 
        res.sendFile(path.join(__dirname, '/Views/register.html'))
        });
